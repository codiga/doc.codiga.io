---
id: rosie-pattern
title: Pattern Rules for Python and Rosie
sidebar_label: Writing Pattern Rules
description: Write a pattern rule that catch potential bugs in your code
keywords:
  - code analysis
  - static code analysis
---

## Write a Pattern Rule

### The Pattern

The pattern is like a regular expression. You specify the pattern of characters
you want to match. Specify values you want to capture using `${...}`.

For example, the pattern `os.chmod(${file}, ${mode})` will match `os.chmod(foo, bar)` and the value of the variable `file` is `foo` while the value of `mode` will be `bar`.

### The verification function

The verification function has the following signature

```javascript
function visit(pattern, filename, code) {
  // your analysis rule code here
}
```

with the following arguments:

- `pattern`: the pattern object that matches with the code
- `filename`: the name of the file being analyzed
- `code` the code

## The Pattern Object

The pattern object passed as the first argument of the function
`visit` contains the values of all matches.

To get the value of a variable that matches the pattern, use the function `variables.get`
of the pattern object. It returns an object with the following properties:

- `start`: the starting position of the match (`start.line` returns the line, `start.col` returns the column)
- `end`: the ending position of the match (`end.line` returns the line, `end.col` returns the column)
- `value`: the string value of the match

## Dissecting a pattern rule

We will be dissecting the rule [file-write-others
](https://app.codiga.io/hub/ruleset/python-security/file-write-others), a rule
that is used to check if a Python call to `os.chmod()` contains the
string `stat.S_IWOTH`.

The Pattern used for this rule is `os.chmod(${file}, ${mode})`.

There is the complete code.

```javascript
function visit(pattern, filename, code) {
  const mode = pattern.variables.get("mode");

  if (filename.includes("_test.py") || filename.startsWith("test_")) {
    return;
  }

  if (mode.value.includes("stat.S_IWOTH")) {
    const error = buildError(
      mode.start.line,
      mode.start.col,
      mode.end.line,
      mode.end.col,
      "file can be written by others",
      "CRITICAL",
      "security"
    );
    const modes = mode.value
      .replaceAll(" ", "")
      .split("|")
      .filter((e) => e !== "stat.S_IWOTH");
    const newModes = modes.join(" | ");
    const edit = buildEdit(
      mode.start.line,
      mode.start.col,
      mode.end.line,
      mode.end.col,
      "update",
      newModes
    );
    const fix = buildFix("remove the write flag", [edit]);
    addError(error.addFix(fix));
  }
}
```

There is the description of the rule step by step:

1. Get the value of the match for the variable `mode`: `const mode = pattern.variables.get("mode");`
2. Check that the file being edited is not a test file (`filename.includes("_test.py") || filename.startsWith("test_")`). Otherwise, do not report anything
3. If the content of the `mode` variable contains `stat.S_IWOTH`, we need to report an error
4. Build an error that will highlight from the start to the end of the `mode` parameter.
5. Remove the value `stat.S_IWOTH` from the parameters list of the call to `os.chmod()`
6. Build an edit to replace the parameter to `os.chmod()` with a new string that does not include `stat.S_IWOTH`
7. Report the error with the fix

## Examples

- [Checking file permissions for `os.chmod()`](https://app.codiga.io/hub/ruleset/python-security/file-write-others)
- [No `assert` in Production](https://app.codiga.io/hub/ruleset/python-best-practices/no-assert)
