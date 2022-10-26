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

## Code Pattern

This AST element captures the following code.

```python

for v, w in ...:
  ...
```

## Attributes

- `variables` (array or `PythonExpression`): list of variables in the `for` expression
- `list` (type `AstString`): the list
- `statements` (type `AstString`): the code for the statements
- `else` (type `AstString`): the code of the else statements
