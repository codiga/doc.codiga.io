---
id: rosie-ast-python-pythonexpression
title: PythonExpression AST Python Object
sidebar_label: Expression
description: The PythonExpression object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `PythonExpression` object matches a Python expression (assignment, function call, etc.).

The `astType` value for this node is `expression`.

## Attributes

- `atom` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the value of the expression
- `expressionType` (type `string`): the type of expression. Current valid values are `atom`.
