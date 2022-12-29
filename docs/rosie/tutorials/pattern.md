---
id: analysis-rule-tutorial-pattern
title: Tutorial - Write a Codiga Pattern Rule
sidebar_label: Tutorial Pattern Rule
description: Implement a Pattern rule with Codiga
keywords:
  - vscode
  - jetbrains
  - intellij
  - code analysis rules
  - sast
---

This tutorial explains how to write a Codiga Pattern rule. If you
want to write an AST rule, look at the following tutorials:

- [Writing a Python AST rule](/docs/rosie/tutorials/analysis-rule-tutorial-python-ast)

A pattern ruleset lets you catch a pattern of code and emits violations/errors.

## Rule to write

We are going to write an analysis rule that will catch all occurrences of `assert foo` and will replace it with `assert bar`.

This checks works on all Python file except test files (e.g. the ones starting with `test_` or ending with `_test.py`).

To make a rule, we need to go through the following steps:

- Create a rulseset
- Create a rule
- Write the rule
- Add some tests

Each section gives a walkthrough step by step.

## Step 1: Create a ruleset

:::warning

If you create a private ruleset, you need to make sure you set your Codiga API token in your IDE to be able to use it.

:::

First, [create a ruleset](https://app.codiga.io/analysis/ruleset/create/). You can
make it public and give it a nice description.

![Create a Ruleset](/img/rosie/tutorials/pattern/create-rulesets.png)

## Step 2: Create a rule

:::tip

The rule is associated with a ruleset and will inherit the ruleset visibility

:::

Then, [create a rule](https://app.codiga.io/analysis/rule/create):

- Select `Python` as the language
- Select the ruleset you previously created
- Enter a name for your rule.

:::info

The rule name must be alphanumeric with `-` between characters and all lowercases.
**Valid rule names** are `my-rule-name` or `awesome-rule`, **invalid names** are `My Awesome Rule Name` or `Rule to Check Something (Super Cool)`.

:::

![Rule Creation](/img/rosie/tutorials/pattern/rule-creation.png)

## Step 3: Write your rule

Now, it's time to write your rule! When there is a match for your pattern, the function
`visit` is invoked by the static analyzer. This function is the one that reports error in
your code.

:::info

The `visit` function is **only** triggered when the pattern matches and matches **all**
occurrences of the pattern.

:::

Let's first look at the function signature of the analysis rule:

```javascript
function visit(nodeOrPattern, filename, code)
```

- `nodeOrPattern`: this value represent the pattern that matches
- `filename`: the filename being analyzed. For example, if the user edits the file `foo/bar.py` in their IDE, the value `"foo/bar.py"` will be passed for `filename`.
- `code`: the code as a text

:::info
The filename argument is used to disable some checks for particular filenames. For example, we do not
:::

Select the rule type to **Pattern** and enter the following value `assert ${something}`.

With this pattern, the analyzer will catch every line that looks like `assert` followed by some text.
It captures the text in a variable called `something` and you can check the value of this variable
in the `visit` function.

### Do not analyze if this is a test file

First, we will pass the analysis, if the file is a test file. We will skip
the analysis, if the file starts with `test_` or ends with `_test.py`.

Therefore, we add the following code at the beginning of the `visit` function.

```javascript
if (filename.includes("_test.py") || filename.startsWith("test_")) {
  return;
}
```

### Check the content of the pattern

We want to get the value of the `something` variable and check that the value
if `foo`.

To get the `something` variable, we do the following command:

```javascript
const exceptionName = nodeOrPattern.variables.get("something");
```

This returns a pattern object. A pattern object is defined like this

```json
{
  "start": {
    "line": 1,
    "col": 1
  },
  "end": {
    "line": 1,
    "col": 10
  },
  "value": "variable content"
}
```

- The `start` attribute references where the pattern occurs in the text (`line` and `col` (column)).
- The `end` attribute references where the pattern occurs in the text (`line` and `col` (column)).
- The `value` attribute contains the text value of the variable.

Therefore, we want to check that the pattern exists and the value is `foo`.

The code is then the following:

```javascript
const exceptionName = nodeOrPattern.variables.get("something");
if (exceptionName && exceptionName.value === "foo") {
  // emit an error
}
```

### Build an error

Building an error is achieved with the function `buildError`. There is the function signature.

```
buildError(startLine, startCol, endLine, endCol, message, severity, category)
```

The function takes the following parameters:

- `startLine`: the line where the violation starts
- `startCol`: the column where the violation starts
- `endLine`: the line where the violation ends
- `endCol`: the column where the violation ends
- `message`: the message to show in the IDE/Pull Request
- `severity`: severity of the error (will impact how the violation is shown in the IDE). Correct values are `critical`, `error`, `warning` and `info`.
- `category`: the category of the error. Correct values are `error_prone`, `security`, `safety`, `best_practices`, `code_style`, `design` and `deployment`.

:::info

The function `buildError` is a built-in function in Rosie.

:::

Our violation reports an error with the message `do not assert on foo` right where the name `foo` appears. It is an informational message
in the category `BEST_PRACTICES`. We use the following code to build the error.

```javascript
const error = buildError(
  exceptionName.start.line,
  exceptionName.start.col,
  exceptionName.end.line,
  exceptionName.end.col,
  "do not assert on foo",
  "INFO",
  "BEST_PRACTICES"
);
```

### Build a fix

It's not enough to detect an error, we want to automatically fix it!

We will build a fix that updates the value of the argument and replaces `foo` with `bar`.

A fix is composed of at least one edit. You can use the following function to build edits:

```javascript
buildEditAdd(startLine, startCol, valueToAdd);
buildEditRemove(startLine, startCol, endLine, endCol);
buildEditUpdate(startLine, startCol, endLine, endCol, newValue);
```

- `buildEditAdd` adds the text `valueToAdd` in the IDE at line `startLine` and `startCol`
- `buildEditRemove` removes the text between `startLine`:`startCol` and `endLine`:`endCol`
- `buildEditUpdate` updates the text between `startLine`:`startCol` and `endLine`:`endCol` with `newValue`

To make an edit that replaces the value of the argument `something` from `foo` to var, build an edit like this:

```javascript
const edit = buildEditUpdate(
  exceptionName.start.line,
  exceptionName.start.col,
  exceptionName.end.line,
  exceptionName.end.col,
  "bar"
);
```

Then, build a fix with the edit you previously defined. The first argument is the message of the fix
that will be shown in the IDE.

```javascript
const fix = buildFix("replace by bar", [edit]);
```

### Add the error with the fix

Finally, we add the violation to the list of violation being reported using the function `addError`

```javascript
addError(error.addFix(fix));
```

### Final code

There is the final code of our rule.

```javascript
function visit(nodeOrPattern, filename, code) {
  if (filename.includes("_test.py") || filename.startsWith("test_")) {
    return;
  }
  const exceptionName = nodeOrPattern.variables.get("something");
  if (exceptionName && exceptionName.value === "foo") {
    const error = buildError(
      exceptionName.start.line,
      exceptionName.start.col,
      exceptionName.end.line,
      exceptionName.end.col,
      "do not assert on foo",
      "INFO",
      "BEST_PRACTICES"
    );
    const edit = buildEdit(
      exceptionName.start.line,
      exceptionName.start.col,
      exceptionName.end.line,
      exceptionName.end.col,
      "update",
      "bar"
    );
    const fix = buildFix("replace by bar", [edit]);
    addError(error.addFix(fix));
  }
}
```

## Step 4: Write a test

Add two tests to your rule:

- One test with a file name that starts with `test_`: it will not trigger any issue
- One test with a file name that does not start with `test_` and will trigger the issue

For both tests, put the content with

```python
assert foo
```

## Step 5: Save

Your rule should finally look like the following

![Rule Complete](/img/rosie/tutorials/pattern/rule-complete.png)

## Step 6: Test your rule

![Test Rule](/img/rosie/tutorials/pattern/check-rule.gif)

## Step 7: Test in your IDE

Last step: test in your IDE!

First, download the Codiga plugin for [VS Code](https://marketplace.visualstudio.com/items?itemName=codiga.vscode-plugin) or [JetBrains](https://plugins.jetbrains.com/plugin/17969).

Second, create a `codiga.yml` file at the root of your project with the following content

```yaml
rulesets:
  - <your-ruleset>
```

:::warning

If you set the privacy of your ruleset to private, make sure you set your Codiga API token in your IDE

:::

Edit a Python file (extension `.py`) and enter the code

```python

assert foo

```

The warning will appear. You can mouse over the warning, the fix is then available in your IDE.

![Code Analysis Rule in the IDE](/img/rosie/tutorials/pattern/ide-check.gif)

You will then see the warning.

:::info

The same error will be triggered in the Codiga Code Analysis and your pull requests as long as the `codiga.yml` file is present.

:::

## Needs some inspiration? Browse the hub!

If you need some inspiration to create rules, explore the [Codiga Hub](https://app.codiga.io/hub/rulesets), explore rulesets and find a code analysis rule you can reuse.

## Join the Codiga Community!

Have some questions? Join our [Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ) and ask us any question!
