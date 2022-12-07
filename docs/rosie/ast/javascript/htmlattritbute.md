---
id: rosie-ast-javascript-htmlattribute
title: HTML Attribute AST JavaScript Object
sidebar_label: HTML Attribute
description: The HTML Attribute object in the JavaScript AST
keywords:
  - rosie
  - ast
  - html attribute
---

The `HTML Attritube` object matches a JavaScript HTML Attribute as the one you have in JSX. It is attached
to a [`HTML Element`](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlelement).

The `astType` value for this node is `htmlattribute`.

## Code Pattern

This object captures the part `attr="val"` in the following code pattern.

```jsx
return <MyComponent attr="val" />;
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the name of the attribute
- `value` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the value of the attribute

## See Also

- [HTML Element](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlelement)
