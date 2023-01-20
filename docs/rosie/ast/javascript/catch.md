---
id: rosie-ast-javascript-catch
title: JavaScriptCatchStatement AST JavaScript Object
sidebar_label: JavaScriptCatchStatement
description: The JavaScriptCatchStatement object in the JavaScript AST
keywords:
  - rosie
  - ast
  - catch statement
---

The `JavaScriptCatchStatement` object matches a catch block in JavaScript.

The `astType` value for this node is `catchstatement`.

## Code Pattern

This object captures the code `catch .... ` in the following code pattern:

```jsx
try {
  // do something
} catch (error) {
  // exception handling
}
```

## Attributes

- `exception` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): name of the exception (often an [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring))
- `statements` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the catch block
