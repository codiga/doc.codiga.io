---
id: rosie-ast-python-functioncallargument
title: Function Call Argument AST Python Object
sidebar_label: Function Call Argument
description: The FunctionCallArgument object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCallArgument` object matches an argument in a function call.
It is used in the [FunctionCallArguments](/docs/rosie/ast/python/rosie-ast-python-functioncallarguments) object.

The `astType` value for this node is `argument`.

## Code Pattern

This AST element captures the `arg1` or `arg2` part of following code:

```python
my_function(arg1, arg2)
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the argument
- `value` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): value of the argument (`null` is no value passed)

## See also

- [Function Call AST Node](/docs/rosie/ast/python/rosie-ast-python-functioncall)
- [Function Call Arguments AST Node](/docs/rosie/ast/python/rosie-ast-python-functioncallarguments)
