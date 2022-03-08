---
id: typescript-rule-long-functions
title: TypeScript Long functions
description: Code Analysis rules for TypeScript on Codiga detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
  - TypeScript
---

Check that a TypeScript function is no longer than a given number of lines.
Functions should be short. A typical rule of thumb is that
a function should fit on your screen so that you can understand
the data flow within the function.

You can change the number of lines that is acceptable for a function.
To change that number, go into your project configuration and change the
value of the max number of lines for a function.

By default, the maximum number of lines for a function is 100.
