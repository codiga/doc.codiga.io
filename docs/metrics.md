---
id: metrics
title: Codiga List of Code Quality Metrics
description: Code Quality Metrics from Codiga to evaluate your Technical Debt on all code hosting platform. Available for GitHub, GitLab and Bitbucket.
keywords:
  [
    code analysis,
    technical debt,
    code complexity,
    cyclomatic complexity,
    code analysis,
    static code analysis,
    function length,
    code length,
  ]
---

This page lists all metrics detected by the Codiga engine.

## Code Violation (aka Code Smell)

A code violation is a piece of code that is not correct. Some errors
are not so important (most of the code style errors, which makes it difficult to read - and sometimes understand - the source code) but others
(such as security errors like a buffer overflow) are very important.

To help Codiga users to learn about what code violations should be fixed,
the engines differentiate them using categories and severities.

### Categories

Codiga classifies code violations into the following categories:

- **Best Practice**: the code is not following the language best practices (for example: common function to use, avoid printing the stack trace, do not reassign parameters, etc).
- **Code Style**: potential syntax error or language-specific coding style (for example: correct casing, varible names, etc.), not critical but something that can facilitate maintenance and readability.
- **Documentation**: any documentation issues (for example: any function that is not documented or some parameters documentation that are missing). Low impact on your technical debt (but something to keep in mind for maintenance purposes).
- **Design**: potential design issues in classes or functions (for example: number of parameters, functions are too long, etc). High impact on technical debt.
- **Deployment**: any issue regarding deployment (for example: deployment script in AWS, etc.). Medium to high impact on technical debt.
- **Error Prone**: any statement that can be confusing and impact software maintenance (for example: comparison issue, statements without any effect). Medium impact on technical debt.
- **Performance**: code that negatively impacts your performance (for example: inefficient code). High impact on technical debt.
- **Security**: code that might introduce a buffer overflow or any other security issues. High impact on technical debt.
- **Safety**: code that might crash. High impact on technical debt.
- Other unknown.

### Severity

Codiga separates code violations into four severity, from 1 (critical) to 4 (minor).
Violations with the highest priorities should be the one to be prioritized over low priority.

## Duplicates

Code should not be duplicated; developers should refactor duplicated code into a function. When writing code, developers should follow the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
(Do not Repeat Yourself) principle.

Codiga detects code duplicates automatically. Codiga considers a block of code is a duplicate if they share more than 10 similar lines of code. This value can be tuned into the project preferences.

## Complex Functions

Complex functions are hard to understand, which makes them more prone to bugs and more difficult to maintain. Codiga uses the [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) metric to detect complex code. Any function with a cyclomatic complexity higher than 25 is classified as
complex and should be refactored.

## Long Functions

Long functions are difficult to read and, as for complex functions, prone to errors and hard
to maintain. For that reason, they should be replaced by shorter functions, which are
easier to read, understand and test.

Codiga considers that any function longer than 40 lines of code (LOC) is too long and should be refactored into smaller units of code.
