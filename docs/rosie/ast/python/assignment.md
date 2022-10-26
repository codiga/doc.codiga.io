---
id: rosie-ast-python-assignment
title: Assignment AST Python Object
sidebar_label: Assignment
description: The Assignment object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `Assignment` object matches a Python assignment.

## Code Pattern

This AST element captures the following code.

```python
my_variable = my_value
```

## Attributes

- `astType`: constant string value (`"assignment"`)
- `left` (any type)
- `right` (any type)

:::info

To know what is the type of `left` or `right`, use the `astType` to distinguish.

For example, to check if the left node is a string, just use the following code:

```javascript
if (node.astType === "string") {
  ....
}
```

:::
