---
id: rosie-ast-python-tryblock
title: Try Block AST Python Object
sidebar_label: Try Block
description: The Try Block object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `TryBlock` object matches a Python function, module or object call.

The `astType` value for this node is `trystatement`.

## Code Pattern

This AST element captures the following code.

```python

try:
  ...
except ExceptionName:
  ...
finally:
  ...
```

## Attributes

- `exceptClauses` (array or `ExceptClause`): a list of exception in the `except` clause
- `finallyClause` (type `FinallyClause`): the finally clause
- `arguments` (type `FunctionCallArguments`): the list of arguments

## Examples of rules

- [python-best-practices/no-silent-exception](https://app.codiga.io/hub/ruleset/python-best-practices/no-silent-exception)
