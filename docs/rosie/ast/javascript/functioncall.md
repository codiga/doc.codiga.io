---
id: rosie-ast-javascript-functioncall
title: Function Call AST JavaScript Object
sidebar_label: Function Call
description: The FunctionCall object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCall` object matches a JavaScript function call.

The `astType` value for this node is `functioncall`.

## Code Pattern

This object captures the following code pattern.

```javaScript
myFunction(argument1, argument2);
```

## Attributes

- `functionName` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the name of the function
- `arguments` (type [`FunctionCallArguments`](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncallarguments)): the list of arguments

## Usage

```javascript

const functionCall = ...


// Get the function name
if (functionCall.functionName && functionCall.functionName.value) {
  const functionName = functionCall.functionName.value;
}


// Get the list of all the arguments names
if (functionCall.arguments && functionCall.arguments.values) {
  const argumentsNames = functionCall.arguments.values.filter(a => a.name && a.name.value).map(a => a.name.value);
}
```
