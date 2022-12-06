---
id: rosie-ast-javascript-assignment
title: Assignment AST JavaScript Object
sidebar_label: Assignment
description: The Assignment object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `Assignment` object matches a JavaScript assignment.

The `astType` value for this node is `assignment`.

## Code Pattern

This AST element captures the following code.

```javascript
const myVariable = 1;
```

## Attributes

- `astType`: constant string value (`"assignment"`)
- `left` (any type that inherits [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the left side of the assignment
- `right` (any type that inherits [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the right side of the assignment

:::info

To know what is the type of `left` or `right`, use the `astType` to distinguish.

For example, to check if the left node is a string, just use the following code:

```javascript
if (node.left.astType === "string") {
  ....
}
```

:::
