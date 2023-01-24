---
id: rosie-ast-python-comparison
title: PythonComparison AST Python Object
sidebar_label: PythonComparison
description: The PythonComparison object in the Python AST
keywords:
  - rosie
  - ast
  - class definition
---

The `PythonComparison` object matches a Python class definition.

The `astType` value for this node is `comparison`.

## Code Pattern

This AST element captures `a == b` in the following code:

```python
if a == b:
  pass
```

## Attributes

- `leftSide` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): left element of the comparison
- `operator` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-aststring)): operator (like `==`, `<>`, etc.)
- `rightSide` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): right element of the comparison
