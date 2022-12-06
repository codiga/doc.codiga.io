---
id: rosie-ast-javascript-functioncallargument
title: Function Call Argument AST JavaScript Object
sidebar_label: Function Call Argument
description: The FunctionCallArgument object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCallArgument` object matches an argument in a function call.
It is used in the [FunctionCallArguments](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncallarguments) object.

The `astType` value for this node is `argument`.

## Code Pattern

This AST element captures the `arg1` or `arg2` part of the following code:

```javascript
myFunction(arg1, arg2);
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the argument
- `value` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): value of the argument (`null` is no value passed)

## See also

- [Function Call AST Node](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncall)
- [Function Call Arguments AST Node](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncallarguments)
