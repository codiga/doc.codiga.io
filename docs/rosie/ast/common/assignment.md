---
id: rosie-ast-common-assignment
title: Assignment AST Common Object
sidebar_label: Assignment
description: The Assignment object
keywords:
  - rosie
  - ast
  - function call
---

The `Assignment` object represents an assignment with a left and right part. It inherits the
[`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement) object.

This is a generic type that is used in many programming languages as the concept of assignment is available
in many programming languages.

The `astType` is `assignment`.

## Attributes

- `left` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the received of the assignment
- `right` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the value being assigned
