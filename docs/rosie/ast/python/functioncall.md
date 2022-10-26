---
id: rosie-ast-python-functioncall
title: Function Call AST Python Object
sidebar_label: Function Call
description: The FunctionCall object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionCall` object matches a Python function, module or object call.

The `astType` value for this node is `forstatement`.

## Code Pattern

This object captures the following code pattern.

```python
my_function(arg1, arg2)
```

## Attributes

- `moduleOrObject` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the prefix of the function call. If we do a call `foo.bar`, the `moduleOrObject` value is `foo`
- `functionName` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the name of the function
- `arguments` (type [`FunctionCallArguments`](/docs/rosie/ast/python/rosie-ast-python-functioncallarguments)): the list of arguments

## Examples of rules

- [python-security/avoid-random](https://app.codiga.io/hub/ruleset/python-security/avoid-random)
- [python-security/insecure-hash-functions](https://app.codiga.io/hub/ruleset/python-security/insecure-hash-functions)
- [python-security/subprocess-shell-true](https://app.codiga.io/hub/ruleset/python-security/subprocess-shell-true)

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

## Data Example

This is what the representation of the data looks for a function call such as

```python
module_name.my_function(foo = 42)
```

```json
{
  "moduleOrObject": {
    "astType": "string",
    "start": {
      "line": 1,
      "col": 2
    },
    "end": {
      "line": 1,
      "col": 2
    },
    "value": "module_name"
  },
  "functionName": {
    "astType": "string",
    "start": {
      "line": 1,
      "col": 4
    },
    "end": {
      "line": 1,
      "col": 10
    },
    "value": "my_function"
  },
  "arguments": {
    "start": {
      "line": 1,
      "col": 4
    },
    "end": {
      "line": 1,
      "col": 10
    },
    "values": [
      {
        "start": {
          "line": 1,
          "col": 4
        },
        "end": {
          "line": 1,
          "col": 10
        },
        "name": {
          "astType": "string",
          "start": {
            "line": 1,
            "col": 2
          },
          "end": {
            "line": 1,
            "col": 2
          },
          "value": "foo"
        },
        "value": {
          "astType": "string",
          "start": {
            "line": 1,
            "col": 2
          },
          "end": {
            "line": 1,
            "col": 2
          },
          "value": "42"
        }
      }
    ]
  }
}
```
