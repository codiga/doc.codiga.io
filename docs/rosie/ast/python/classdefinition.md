---
id: rosie-ast-python-classdefinition
title: PythonClassDefinition AST Python Object
sidebar_label: PythonClassDefinition
description: The PythonClassDefinition object in the Python AST
keywords:
  - rosie
  - ast
  - class definition
---

The `PythonClassDefinition` object matches a Python class definition.

The `astType` value for this node is `classdefinition`.

## Code Pattern

This AST element captures the following code.

```python
class MyClass:
  def __init__(self):
    pass


  def my_method(self, argument):
    pass
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the class
- `decorators`: decorators for this class (array of type [`PythonDecorator`](/docs/rosie/ast/python/rosie-ast-python-decorator))
- `parentClasses` (array of type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): parents of the class (e.g. classes inherited from this class)
- `content` (any type that inherits [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the content of the class (methods, attributes, etc)

:::info

To know what is the type of `left` or `right`, use the `astType` to distinguish.

For example, to check if the left node is a string, just use the following code:

```javascript
if (node.left.astType === "string") {
  ....
}
```

:::
