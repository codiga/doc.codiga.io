---
id: rosie-ast-javascript-htmltag
title: HTML Tag AST JavaScript Object
sidebar_label: HTML Tag
description: The HTML Tag object in the JavaScript AST
keywords:
  - rosie
  - ast
  - html tag
---

The `HTML Tag` object matches a JavaScript HTML Tag as the one you have in JSX.

The `astType` value for this node is `htmltag`.

## Code Pattern

This object captures `<MyComponent>`, `</MyComponent>` in the following code pattern.

```jsx
return <MyComponent attr="val"></MyComponent>;
```

## Attributes

- `tag` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the tag of the HTML object
