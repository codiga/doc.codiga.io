---
id: analysis-rule-tutorial-python-ast
title: Tutorial - Write a Python AST Rule
sidebar_label: Tutorial Python AST Rule
description: Implement a Python AST rule with Codiga
keywords:
  - vscode
  - jetbrains
  - intellij
  - code analysis rules
  - sast
---

This tutorial explains how to write a Codiga AST rule for Python. If you
want to write a Pattern rule, look at the following tutorials:

- [Writing a Pattern rule](/docs/rosie/tutorials/analysis-rule-tutorial-pattern)

## What is an AST rule?

An AST rule is the most exact type of rule to check. It checks the **Abstract Syntax Tree** of
your language, which is the most accurate way to check the content of a program. By writing
an AST rule, you accurately check the language element, which reduces the number of false positives.

## Rule Example

We are going to write a rule that checks if the function `print` is called with one parameter
and if the parameter is the string `"foo"`. In this case, we replace the string `"foo"` with `"bar"`.

## Step 1: Create a ruleset

:::warning

If you create a private ruleset, you need to make sure you set your Codiga API token in your IDE to be able to use it.

:::

First, [create a ruleset](https://app.codiga.io/analysis/ruleset/create/). You can
make it public and give it a nice description.

![Create a Ruleset](/img/rosie/tutorials/python-ast/create-rulesets.png)

## Step 2: Create a rule

Second step is to create a rule with the following parameters

- **Language**: set it to `Python`
- **Ruleset**: set it to the name you previously put in step 1
- **Rule name**: sluggified name of your rule
- **Rule Type**: AST
- **Element Checked**: `function call`

:::info

The rule name must be alphanumeric with `-` between characters and all lowercases.
**Valid rule names** are `my-rule-name` or `awesome-rule`, **invalid names** are `My Awesome Rule Name` or `Rule to Check Something (Super Cool)`.

:::

![Create a Rule](/img/rosie/tutorials/python-ast/create-rule.png)

## Step 3: Decide what AST element to match on

In the screen, you specify to write an AST rule for different element type.
The element type specifies that particular node of the AST you focus on. This node will be the entry point
of your analysis rules.

Correct values are:

- `function call`: check a function call in Python (e.g. `function(val1, val2)`)
- `try block`: check a `try`/`except` block
- `function definition`: check the definition of a function (e.g. `def myfunction(val1, val2):`)
- `for loop`: check a for loop (e.g. `for i in ...`)
- `if condition`: check a if condition (e.g. `if foo == bar:`)
- `import`: check an import statement (e.g. `import mypackage` or `from mypackage import foo`)
- `assignment`: check an assignment (e.g. `foo = "bar"` or `foo = bar(baz)`)

Before you start writing your rule, think about what element of a program you want to check, which will indicate the correct value for the element checked.

## Step 4: Write the rule

### The rule code structure

The rule code has a `visit` function that is the entrypoint of your rule.

```javascript
function visit(nodeOrPattern, filename, code) {
  // code
}
```

It has the following parameter:

- the `nodeOrPattern` you rule matches on. The exact type of this argument depends on the element type being checked. All types inherit the `ASTElement` type. As the element checked is set to `FunctionCall`, the `node` for our rule will be a type `FunctionCall`.
- the `filename` where the code is located (a string)
- the `code` being checked (a string)

The value of the `node` parameter depends on the element type checked:

- If the element type checked is `Function Call`, the value of `nodeOrPattern` is a [`FunctionCall` object](/docs/rosie/ast/python/rosie-ast-python-functioncall)
- If the element type checked is `If Condition`, the value of `nodeOrPattern` is a [`IfCondition](/docs/rosie/ast/python/rosie-ast-python-ifcondition)
- If the element type checked is `For Loop`, the value of `nodeOrPattern` is a [`ForStatement` object](/docs/rosie/ast/python/rosie-ast-python-forstmt)
- If the element type checked is `Function Definition`, the value of `nodeOrPattern` is a [`FunctionDefinition` object](/docs/rosie/ast/python/rosie-ast-python-functiondefinition)
- If the element type checked is `Try Block`, the value of `nodeOrPattern` is a [`TryBlock` object](/docs/rosie/ast/python/rosie-ast-python-tryblock)
- If the element type checked is `Import`, the value of `nodeOrPattern` is an [`Import`](/docs/rosie/ast/python/rosie-ast-python-import) or an [`ImportFrom`](/docs/rosie/ast/python/rosie-ast-python-importfrom)
- If the element type checked is `Assignment`, the value of `nodeOrPattern` is a [`Assignment` object](/docs/rosie/ast/python/rosie-ast-python-assignment)

### Ignore test files

First, we will pass the analysis if the file is a test file. We will skip
the analysis if the file starts with `test_` or ends with `_test.py`.

Therefore, we add the following code at the beginning of the `visit` function.
This code exists the `visit` function if the test matches the patterns in the condition.

```javascript
if (filename.includes("_test.py") || filename.startsWith("test_")) {
  return;
}
```

### Detect and build the error

The first step is to detect this is a valid function call with a defined function name.
Once we checked this, we:

1.  Get the function name and check the name of the function is `print`
2.  Get the arguments, make sure there is only one argument and the value is `"foo"`

To check that the function name is not `print`, we use the following code.
It exits the `visit` function if the function name does not match what we are looking for.

```javascript
if (!node.functionName || node.functionName.value !== "print") {
  return;
}
```

To check that there is only argument and that the argument is `"foo"`, we use the following code.

```
  if(!node.arguments || !node.arguments.values || node.arguments.values.length !== 1 ||
     node.arguments.values[0].value.value === "\"foo\"") {
  	return;
  }
```

:::info

In the `argument` value, you notice two consecutive `.value`. The first one (`node.arguments.values[0].value`) returns
the value of the argument. The second `.value` returns the string value of the argument.

:::

Then, we build the error object. It will highlight exactly where the first argument of the `print` function is located.

```javascript
const error = buildError(
  firstArgument.start.line,
  firstArgument.start.col,
  firstArgument.end.line,
  firstArgument.end.col,
  'do not print "foo"',
  "MINOR",
  "BEST_PRACTICE"
);
```

### Build a fix

We build a fix that will replace the text from the first argument by `"bar"`.

A fix is made of at least one edit. We have different functions to build an
edit (`buildEditAdd`, `buildEditRemove` and `buildEditUpdate`). We choose
`buildEditUpdate` to replace text in the code.

The function `buildEditUpdate` takes as arguments:

- the starting line of the edit
- the starting column of the edit
- the ending line of the edit
- the ending column of the edit
- the text to update

```javascript
const edit = buildEditUpdate(
  firstArgument.start.line,
  firstArgument.start.col,
  firstArgument.end.line,
  firstArgument.end.col,
  '"bar"'
);
```

Finally, we create a fix with the edit created previously:

```javascript
const fix = buildFix("print bar", [edit]);
```

### Report the error

Finally, once the report and the associated edit are complete, we
can report it to the IDE using the function `addError()`.

```javascript
addError(error.addFix(fix));
```

### Complete rule code

There is the complete rule code

```javascript
function visit(node, filename, code) {
  if (filename.includes("_test.py") || filename.startsWith("test_")) {
    return;
  }
  if (!node.functionName || node.functionName.value !== "print") {
    return;
  }
  console.log("bla");

  if (
    !node.arguments ||
    !node.arguments.values ||
    node.arguments.values.length !== 1 ||
    node.arguments.values[0].value.value !== '"foo"'
  ) {
    return;
  }
  const firstArgument = node.arguments.values[0].value;

  const error = buildError(
    firstArgument.start.line,
    firstArgument.start.col,
    firstArgument.end.line,
    firstArgument.end.col,
    'do not print "foo"',
    "MINOR",
    "BEST_PRACTICE"
  );
  const edit = buildEditUpdate(
    firstArgument.start.line,
    firstArgument.start.col,
    firstArgument.end.line,
    firstArgument.end.col,
    '"bar"'
  );
  const fix = buildFix("print bar", [edit]);
  addError(error.addFix(fix));
}
```

## Step 4: Write a test

Before the save, write two tests:

1. One test with the name `print-foo.py` with the following code `print ("foo")`
2. One test with the name `test_foo.py` with the following code `print ("foo")`

## Step 5: Save

Save your rule and get ready to test!

## Step 6: Test

![Test Rule](/img/rosie/tutorials/python-ast/check-rule-ast.gif)

## Step 7: Test in your IDE

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

print("foo")

```

The warning will appear. You can mouse over the warning, the fix is then available in your IDE.

![Code Analysis Rule in the IDE](/img/rosie/tutorials/python-ast/ide-check-ast.gif)

## Needs some inspiration? Browse the hub!

If you need some inspiration to create rules, explore the [Codiga Hub](https://app.codiga.io/hub/rulesets), explore rulesets and find a code analysis rule you can reuse.

## Questions? Ask us!

Have some questions? Join our [Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ) and ask us any question!
