---
id: rosie-ast-common-ifstatement
title: IfStatement AST Common Object
sidebar_label: IfStatement
description: The IfStatement object in the Common AST
keywords:
  - rosie
  - ast
  - if statement
---

The `IfStatement` is a common AST Object that models an `if` condition.

## Attributes

- `condition` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the condition of the `if` statement. It is bound to an element specific to your language.
- `statements` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring) the string of all statements if the if condition is satisfied.
- `elseStatements` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the string of all statements if the else condition is satisfied.
