---
id: rosie-ast-common-context
title: Context AST Common Object
sidebar_label: Context
description: The AstString object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `Context` is attached to each AST node via the `context` attribute (see the [`AstElement` documentation](/docs/rosie/ast/common/rosie-ast-common-astelement) for more information).

The exact type attached to each node depends on the language. For example, for python, the [`PythonNodeContext`](/docs/rosie/ast/python/rosie-ast-python-node-context)
is attached.

## Attributes

There is the element in the context object.

- `code` (type string): the code being analyzed.

## See Also

- [PythonNodeContext](/docs/rosie/ast/python/rosie-ast-python-node-context) that inherits `Context` and it attached to each Python AST node.
