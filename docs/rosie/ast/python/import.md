---
id: rosie-ast-python-import
title: Import AST Python Object
sidebar_label: Import
description: The Import object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `Import` object matches a Python import.

## Code Pattern

This object catches the following code pattern

```python
import module
```

## Attributes

- `packages` (array or `ImportStatementPackage`): list of imported packages
