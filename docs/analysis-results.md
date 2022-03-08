---
id: analysis-results
title: Analysis Results
description: Analyze your code quality on GitHub, GitLab and Bitbucket and spot any security or vulnerability issue. Support for 12+ languages, start for free today.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - github
  - gitlab
  - github actions
  - github profile
  - github badge
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

## Directory view

When you click on the anaysis results, the frontend surfaces
the list of directories. For each of them, the interface
shows the number of code violations, duplicates, complex functions
and long functions.

Depending on how many violations, duplicates, complex or long
functions the directory has, the value is shown with a specific color
in the background:

- **red**: the directory/file has **significantly** more violations/duplicates/complex/long than its siblings.
- **yellow**: the directory/file has more violations/duplicates/complex/long than
  its siblings.
- **green**: the directory/file has about the sane number of violations/duplicates/complex/long than its siblings.

![Analysis Results](/img/analysis-results.png)

## File View

When users attempt to check a file, the interface surfaces the list of metrics specific to this file.

If the associated repository is on GitHub, GitLab or Bitbucket, the content of the file is
shown and the location of the metrics is highlighted with the file content, as shown below.

![Analysis Results](/img/analysis-file.png)
