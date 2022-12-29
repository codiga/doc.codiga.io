---
id: rosie-ast-javascript-aststringwithspread
title: AstString With Spread AST JavaScript Object
sidebar_label: AstStringWithSpread
description: The AstString object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `AstStringWithSpread` object represents a string in the AST with an additional attribute that indicates is there is a spread operator.
It inherits the [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring) object.

## Attributes

- `isSpread` (type `boolean`): if the value is a spread value

## Usage

The `AstStringWithSpread` is used when the spread operator (`...`) is used.

Examples of use:

```javascript
foo = [1, 2, ...originalArray];

obj = { ...originalObj, key: newValue };

myFunction(a, ...iterableObj, b);
```

In the case of the function call (`myFunction(a, ...iterableObj, b)`), the second argument
will behave **exactly** like a string except that the argument `isSpread` will exist and be true.
