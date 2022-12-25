---
id: project-preferences
title: Codiga Analysis Configuration for Automated Code Analysis
sidebar_label: Analysis Configuration
description: Configure your project and Code Reviews on Codiga and adapt the code analysis behavior to your needs.
keywords:
  - code analysis
  - technical debt
  - code complexity
  - cyclomatic complexity
  - code analysis
  - static code analysis
  - function length
  - code length
  - code reviews
  - github
  - gitlab
  - bitbucket
  - stripe
---

## Analysis Configuration

By default, Codiga runs a new analysis every time a new code is pushed to your project repository. The Project Preferences page gives you access to all the settings for each project. Click on the **"Analysis Configuration"** tab to set up your preferences.

![Analysis configuration](/img/project-preferences-02.png)

### Integration with Repository

Integrating with a repository provides a secure and efficient way to store, manage, and track changes to source code.

![Analysis configuration](/img/analysis-configuration-01.png)

- **Analyze project on branch push**: start a new analysis when there is a push on the repository.
- **Enable Pull/Merge Requests**: Enable pull requests for GitHub and Bitbucket. For GitLab, enable merge requests.
- **Show violations in Pull/Merge Requests**: violations will be detected and direclty annotated in code changes.
- **Duplicates detection on Pull/Merge Requests**: identify duplicate code.
- **Complex functions detection on Pull/Merge Requests**: identify complex functions in the code.
- **Long functions detection on Pull/Merge Requests**: identify long functions in the code.

### Security

![Analysis configuration](/img/analysis-configuration-02.png)

**Secret detection**: scans your repository for any leaked secret (e.g. passwords, AWS access keys, etc.).

### Threshold

![Analysis configuration](/img/analysis-configuration-04.png)

- **Long functions threshold**: minimum function `lengthReports` functions that are longer than 40 numbers of lines.
- **Complex function threshold**: cyclomatic `complexityReports` functions that have a cyclomatic complexity higher than 25.
- **Minimum lines per duplicate**: minimum duplicate `linesReports` functions that have a duplicate lines of code higher than 25.
