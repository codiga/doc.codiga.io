---
id: rosie-ast-javascript-classdefinition
title: Class Definition AST JavaScript Object
sidebar_label: Class Definition
description: The ClassDefinition object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `ClassDefinition` object matches the definition of a class.

The `astType` value for this node is `classdefinition`.

## Code Pattern

This AST element captures the `arg1` or `arg2` part of the following code:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the class
- `parentClass` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the parent class if any
