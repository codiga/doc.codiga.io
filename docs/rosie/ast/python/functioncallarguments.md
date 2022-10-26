---
id: rosie-ast-python-functioncallarguments
title: Function Call Arguments AST Python Object
sidebar_label: Function Call Arguments
description: The FunctionCallArguments object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCallArguments` object matches the arguments in a function call

The `astType` value for this node is `argument`.

## Code Pattern

This AST element captures the `(arg1, arg2)` part of following code:

```python
my_function(arg1, arg2)
```

## Attributes

- `values` (array of `FunctionCallArgument`): a list of arguments

## See also

- [Function Call AST Node](/docs/rosie/ast/python/rosie-ast-python-functioncall)
