---
id: rosie-ast-typescript-index
title: TypeScript Specific Objects
sidebar_label: TypeScript Objects
description: TypeScript EntryPoint objects
keywords:
  - rosie
  - ast
  - typescript
---

These are the types specific to TypeScript. For types that are common with JavaScript (e.g. most of them are), please refer to the [JavaScript types](/docs/rosie/ast/javascript/)

## AST Type mapping

An AST TypeScript specifies the type of object being processed.
There is the mapping between the object type and the link to the documentation.

| AST Rule Type       | JavaScript Object                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------ |
| Class Definition    | [ClassDefinition](/docs/rosie/ast/javascript/rosie-ast-javascript-classdefinition)         |
| Function Call       | [FunctionCall](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncall)               |
| Function Definition | [FunctionDefinition](/docs/rosie/ast/javascript/rosie-ast-javascript-functiondefinition)   |
| HTML Element        | [HTML Element](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlelement)                |
| If Condition        | [IfCondition](/docs/rosie/ast/common/rosie-ast-common-ifstatement)                         |
| For Loop            | [ForStatement](/docs/rosie/ast/common/rosie-ast-common-forstatement)                       |
| VariableDeclaration | [VariableDeclaration](/docs/rosie/ast/javascript/rosie-ast-javascript-variabledeclaration) |
