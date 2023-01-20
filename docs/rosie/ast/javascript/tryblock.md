---
id: rosie-ast-javascript-try-block
title: JavaScriptTryStatement AST JavaScript Object
sidebar_label: JavaScriptTryStatement
description: The JavaScriptTryStatement object in the JavaScript AST
keywords:
  - rosie
  - ast
  - try statement
---

The `JavaScriptTryStatement` object matches a try block in JavaScript.

The `astType` value for this node is `trystatement`.

## Code Pattern

This object captures the following code pattern.

```jsx
try {
  // do something
} catch (error) {
  // exception handling
}
```

## Attributes

- `tryblock` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the try block
- `finallyBlock` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the finally block
- `catchBlock` (type [`JavaScriptCatchStatement`](/docs/rosie/ast/javascript/rosie-ast-javascript-catch)): catch block with the exception name being caught.
