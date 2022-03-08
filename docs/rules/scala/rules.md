---
id: rules-scala
title: Scala rules
description: Code Analysis rules of Codiga for Scala detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - Scala
---

| Rule                                                     | Category       | Severity | Description                                  |
| -------------------------------------------------------- | -------------- | -------- | -------------------------------------------- |
| org.scalastyle.scalariform.ClassNamesChecker             | Design         | 3        | Incorrect class name                         |
| org.scalastyle.scalariform.CyclomaticComplexityChecker   | Design         | 1        | Cyclomatic complexity too high               |
| org.scalastyle.scalariform.IllegalImportsChecker         | Best Practices | 4        | Import from illegal package                  |
| org.scalastyle.scalariform.MultipleStringLiteralsChecker | Best Practices | 3        | Literal string appears too much in the file  |
| org.scalastyle.scalariform.UppercaseLChecker             | Code Style     | 4        | Use an uppercase character for long literals |
