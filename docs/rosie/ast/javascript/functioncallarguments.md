---
id: rosie-ast-javascript-functioncallarguments
title: Function Call Arguments AST JavaScript Object
sidebar_label: Function Call Arguments
description: The FunctionCallArguments object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCallArguments` object matches the arguments in a function call

The `astType` value for this node is `arguments`.

## Code Pattern

This AST element captures the `(arg1, arg2)` part of following code:

```javascript
myFunction(arg1, arg2);
```

## Attributes

- `values` (array of `FunctionCallArgument`): a list of arguments

## See also

- [Function Call AST Node](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncall)
