---
id: rosie-python-ast
title: AST Rules for Python and Rosie
sidebar_label: Writing Python AST Rule
description: Write rules that manipulate the Python AST
keywords:
  - sast
  - static code analysis rules
  - python ast
  - ast
---

## Python AST Rules

An AST rule is a rule that browses the AST and reports an error (along with a potential fix).

Every single node in the AST has the following properties:

- `start`: a position with the `line` and `col` attributes: `.start.line` is the starting line of the element and `.start.col` is the starting column of the element.
- `end`: a position with the `line` and `col` attributes. `.end.line` is the ending line of the element and `.end.col` is the ending column of the element.
- `astType` a string that indicates the type of the AST node.

## Examples of Python AST Rules

The following rules are available publicly and can be used as a starter.

### Function Call

- [Changing Python format string by f-string](https://app.codiga.io/hub/ruleset/python-best-practices/replace-format-string)

### For loop

- [No range loop with len](https://app.codiga.io/hub/ruleset/python-best-practices/no-range-loop-with-len)

### If condition

- [No if when True](https://app.codiga.io/hub/ruleset/python-best-practices/no-if-true)

### Try Block

- [No silent exception](https://app.codiga.io/hub/ruleset/python-best-practices/no-silent-exception)
