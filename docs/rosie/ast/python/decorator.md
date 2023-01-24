---
id: rosie-ast-python-decorator
title: PythonDecorator AST Python Object
sidebar_label: PythonDecorator
description: The PythonDecorator object in the Python AST
keywords:
  - rosie
  - ast
  - class definition
---

The `PythonDecorator` object matches a Python decorator for a class or a method.

The `astType` value for this node is `decorator`.

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the decorator
- `arguments`: (array of type [`PythonArgument`](/docs/rosie/ast/python/rosie-ast-python-argument)): arguments of the decorator
