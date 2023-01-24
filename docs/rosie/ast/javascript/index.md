---
id: rosie-ast-javascript-index
title: JavaScript/TypeScript Objects
sidebar_label: JavaScript/TypeScript Objects
description: JavaScript EntryPoint objects
keywords:
  - rosie
  - ast
  - html attribute
---

## AST Type mapping

An AST JavaScript specifies the type of object being processed.
There is the mapping between the object type and the link to the documentation.

:::info

The following objects are valid for JavaScript **AND** TypeScript.

:::

| AST Rule Type        | JavaScript Object                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Class Definition     | [ClassDefinition](/docs/rosie/ast/javascript/rosie-ast-javascript-classdefinition)         |
| Function Call        | [FunctionCall](/docs/rosie/ast/javascript/rosie-ast-javascript-functioncall)               |
| Function Definition  | [FunctionDefinition](/docs/rosie/ast/javascript/rosie-ast-javascript-functiondefinition)   |
| HTML Element         | [HTML Element](/docs/rosie/ast/javascript/rosie-ast-javascript-htmlelement)                |
| If Condition         | [IfCondition](/docs/rosie/ast/common/rosie-ast-common-ifstatement)                         |
| For Loop             | [ForStatement](/docs/rosie/ast/common/rosie-ast-common-forstatement)                       |
| Try Block            | [TryBlock](/docs/rosie/ast/javascript/rosie-ast-javascript-try-block)                      |
| Assignment           | [Assignment](/docs/rosie/ast/javascript/rosie-ast-javascript-assignment)                   |
| Variable Declaration | [VariableDeclaration](/docs/rosie/ast/javascript/rosie-ast-javascript-variabledeclaration) |
