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

The `astType` value for this node is `fromstatement`.

## Code Pattern

This object catches the following code pattern

```python
from module import name as foo
```

## Attributes

- `pkg` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): package being imported
- `elements` (array of [`ImportFromElement`](/docs/rosie/ast/python/rosie-ast-python-importfromelement)): list of elements being imported
