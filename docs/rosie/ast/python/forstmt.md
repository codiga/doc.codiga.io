---
id: rosie-ast-python-forstmt
title: For Statement AST Python Object
sidebar_label: For Statement
description: The For Statement object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `ForStatement` object matches a Python function, module or object call.

The `astType` value for this node is `forstatement`.

## Code Pattern

This AST element captures the following code.

```python

for v, w in ...:
  ...
```

## Attributes

- `variables` (array of [`PythonExpression`](/docs/rosie/ast/python/rosie-ast-python-pythonexpression)): list of variables in the `for` expression
- `list` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the list
- `statements` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the code for the statements
- `elseStatement` (type `PythonElseStatement`): the code of the else statements
