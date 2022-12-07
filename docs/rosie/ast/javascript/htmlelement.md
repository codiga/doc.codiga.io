---
id: rosie-ast-javascript-htmlelement
title: HTML Element AST JavaScript Object
sidebar_label: HTML Element
description: The HTML Element object in the JavaScript AST
keywords:
  - rosie
  - ast
  - html element
---

The `HTML Element` object matches a JavaScript HTML Element as the one you have in JSX.

The `astType` value for this node is `htmlelement`.

## Code Pattern

This object captures the following code pattern.

```jsx
return <MyComponent attr="val" />;
```

## Attributes

- `tag` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the tag of the HTML object
- `attributes` (array of type [`HTMLAttribute`](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlattribute)): the list of attributes
