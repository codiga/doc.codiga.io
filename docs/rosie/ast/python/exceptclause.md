---
id: rosie-ast-python-except
title: PythonDecorator AST Python Object
sidebar_label: ExceptClause
description: The ExceptClause object in the Python AST
keywords:
  - rosie
  - ast
  - class definition
---

The `ExceptClause` object matches the `except` part of a `try` block.

The `astType` value for this node is `exceptclause`.

## Attributes

- `content` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the content of the except block (e.g. the statements in the block)
- `exceptions` (array of type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of all exceptions being raised
- `as` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): if the exception is renamed
