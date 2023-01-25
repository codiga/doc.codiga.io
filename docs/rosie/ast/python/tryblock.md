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

- `content` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the content of the try block (e.g. the statements in the block)
- `exceptClauses` (array or [`ExceptClause`](/docs/rosie/ast/python/rosie-ast-python-except/)): a list of exception in the `except` clause
- `finallyClause` (type [`FinallyClause`](/docs/rosie/ast/python/rosie-ast-python-finally/)): the finally clause

## Examples of rules

- [python-best-practices/no-silent-exception](https://app.codiga.io/hub/ruleset/python-best-practices/no-silent-exception)
