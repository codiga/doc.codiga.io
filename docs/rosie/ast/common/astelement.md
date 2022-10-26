---
id: rosie-ast-common-astelement
title: AstString AST Common Object
sidebar_label: AstElement
description: The AstString object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `AstElement` object is the core of ALL elements. Every single element.

:::info

Every single AST element in the document inherits the `AstElement` and can access its data

:::

## Attributes

- `astType` (type string): the type of the element. The value depends in what element you are on.
- `start` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST
- `end` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST

:::tip

At any time when you write a rule, use the `astType` to distinguish between the types of nodes
you are working on.

:::

## Usage

When you have an AST object, you can do the following:

```javascript
const astObject = ...

// get the starting line of the element
const startLine = astObject.start.line;

// get the ending column of the object
const endCol = astObject.end.col;

// check if the type of the object is string
if (astObject.astType === "string") {
  ...
}
```
