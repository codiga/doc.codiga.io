---
id: rosie-ast-javascript-node-context
title: JavaScriptNodeContext AST Python Object
sidebar_label: JavaScriptNodeContext
description: The JavaScriptNodeContext object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `JavaScriptNodeContext` is attached to each AST object for Python via the `context` attribute. It inherits the [`Context`](/docs/rosie/ast/common/rosie-ast-common-context) type.

## Attributes

- `currentFunction` (array or [`FunctionDefinition`](/docs/rosie/ast/javascript/rosie-ast-javascript-functiondefinition/)): the current function we are in (`null` if we are not in a function)
- `currentClass` (type [`ClassDefinition`](/docs/rosie/ast/javascript/rosie-ast-javascript-classdefinition/)): the current class (or `null` if not in a class)
- `imports` (array of type [`Import`](/docs/rosie/ast/javascript/rosie-ast-javascript-import/): list of all imports
- `assignments` (array of type [`Assignment`](/docs/rosie/ast/common/rosie-ast-common-assignment/)): list of assignments

## Example of use

```javascript
// Getting the context
const ctx = node.context;

// Getting the imports
const allImports = ctx.imports;
```
