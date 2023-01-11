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
return (
  <MyComponent attr="val">
    <div>
      <ul>
        <li>item</li>
      </ul>
    </div>
  </MyComponent>
);
```

## Attributes

- `tag` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the tag of the HTML object
- `openingTag` (type [`HTML Tag`](/docs/rosie/ast/javascript/rosie-ast-javascript-htmltag)): the tag element (with the position) of the opening tag
- `closingTag` (type [`HTML Tag`](/docs/rosie/ast/javascript/rosie-ast-javascript-htmltag)): the tag element (with the position) of the closing tag
- `attributes` (array of type [`HTMLAttribute`](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlattribute)): the list of attributes
- `content` (array of [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): arrays that contains all the children of an HTML node.

## Examples of rules

- [jsx-a11y/html-has-lang](https://app.codiga.io/hub/ruleset/jsx-a11y/html-has-lang)
- [jsx-react/jsx-no-duplicate-props](https://app.codiga.io/hub/ruleset/jsx-react/jsx-no-duplicate-props)
