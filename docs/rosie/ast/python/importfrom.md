---
id: rosie-ast-python-importfrom
title: ImportFrom AST Python Object
sidebar_label: Import From
description: The Import object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `ImportFrom` object matches a Python import.

## Code Pattern

This object catches the following code pattern

```python
from module import name
```

## Attributes

- `pkg` (type `AstString`): package being imported
- `elements` (array of `FromElement`): list of elements being imported
