---
id: dashboard
title: Codiga Code Analysis Dashboard
sidebar_label: Code Analysis Dashboard
description: Dashboard of your code quality and technical debt for GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - github
  - gitlab
  - github actions
  - bitbucket
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
---

## Project dashboard

The project dashboard is an overview of the latest project metrics It also shows all historical data so that you can analyze trends in your code base (for example: is the quality of your code base improving or not).

## Metrics

The dashboard includes the following metrics:

- **Quality score**: indicates how healthy your codebase is. The higher the score, the better.
- **Distribution of violations per category**: distribution of the violations detected using static analysis tools per category. It helps to identify where bugs are prevalent.
- **Distribution of violation per severity**: Distribution of the violations detected using static analysis tools per severity. A low severity means the violations is serious. Severities can include:
- **Code distribution**: an overview of the languages used in your project.
- **Long functions**: indicates functions that have more than 40 lines of code (SLOCS) [Learn more about why long functions should be avoided.](https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or)
- **Complex functions**: Functions that have a high cyclomatic complexity and are more likely to have bugs. [Learn more about cyclomatic complexity.](https://en.wikipedia.org/wiki/Cyclomatic_complexity)
- **Duplicated lines**: percentage of the code duplicated in the repository [Learn more about why code should not be duplicated.](https://en.wikipedia.org/wiki/Duplicate_code)

![Dashboard - part1](/img/dashboard-01.png)
