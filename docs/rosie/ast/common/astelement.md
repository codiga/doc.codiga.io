---
id: rosie-ast-common-astelement
title: AstElement AST Common Object
sidebar_label: AstElement
description: The AstElement object in the Python AST
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
- `context` (type [`Context`](/docs/rosie/ast/common/rosie-ast-common-context) and depends on the language): the context of the AST
- `start` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST
- `end` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST

:::tip

At any time when you write a rule, use the `astType` to distinguish between the types of nodes
you are working on.

:::

:::info

The `context` attribute depends on your language. It inherits the [`Context`](/docs/rosie/ast/common/rosie-ast-common-context) object.
If you are using Python, see [`PythonNodeContext`](/docs/rosie/ast/common/rosie-ast-common-context)

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

if (astObject.context.currentFunction) {
  // this AST element is in a function
}
```
