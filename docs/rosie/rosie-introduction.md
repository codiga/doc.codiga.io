---
id: rosie-introduction
title: Rosie Static Analyzer
sidebar_label: Introduction to Rosie
description: How to add custom rules with Codiga and Rosie
keywords:
  - sast
  - code analysis
  - code analysis rules
  - sast
---

Rosie is Codiga's Static Code Analyzer.

Rosie works as an API to provide real-time feedback on your code within your IDE or when you push a new revision on your repository.

It is integrated with every element of Codiga's code analysis platform.

<SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
<Card>
<Heading size="md" m={0}>Create an AST rule</Heading>
<Text fontSize="sm" m={0} lineHeight="tall" flexGrow={2}>
By writing an AST rule, you accurately check the language element, which reduces the number of false positives.
</Text>

<Link size="sm" variant="primary" href="/docs/rosie/tutorials/analysis-rule-tutorial-python-ast">Learn More</Link>
</Card>
<Card>
<Heading size="md" m={0}>Create a pattern rule</Heading>
<Text fontSize="sm" m={0} lineHeight="tall" flexGrow={2}>
A pattern ruleset lets you catch a pattern of code and emits violations/errors. This tutorial explains how to write a Codiga Pattern rule.
</Text>
<Link size="sm" variant="primary" href="/docs/rosie/tutorials/analysis-rule-tutorial-pattern">
    Learn More
  </Link>
</Card>
</SimpleGrid>

## Custom Rules

Rosie provides the ability to write custom rules. More importantly, you can write your own rules and share them with your team.

Custom rules are written in JavaScript and can check different types of code. You can experiment with creating and testing new rules on the [Codiga Playground](https://app.codiga.io/hub/playground). You can also browse rulesets on the [Codiga Hub](https://app.codiga.io/hub/rulesets).

## Types of Rules

Rosie supports two types of rules:

- **Abstract Syntax Tree (AST)**: parses the AST of the file under analysis and runs rules that report violations and generate fixed based on a code pattern. Learn more about AST rules for [Python](/docs/rosie/python/rosie-python-ast).
- **Pattern**: matches a sequence of code and reports violations based on the pattern content. Learn more about [pattern rules](/docs/rosie/rosie-pattern).

If you want to write a quick rule, use the **pattern** rule type. It works like a regular expression and can provide good support for error detection.

If you want to catch more complicated errors, use the **AST** rule type. It is more complicated than the **pattern** rule type but it can catch precise code elements.
