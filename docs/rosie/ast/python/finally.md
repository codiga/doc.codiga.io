---
id: rosie-ast-python-finally
title: FinallyClause AST Python Object
sidebar_label: FinallyClause
description: The FinallyClause object in the Python AST
keywords:
  - rosie
  - ast
  - class definition
---

The `FinallyClause` object matches the `finally` part of a `try` block.

The `astType` value for this node is `finallyclause`.

## Attributes

- `content` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the content of the except block (e.g. the statements in the block)
