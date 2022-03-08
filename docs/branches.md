---
id: branches
title: Branch Support
description: Manage multiple branches on Codiga to analyze your code and automated your Code Reviews on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
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
  - CVEs
---

## Summary

- Codiga supports the analysis of multiple branches.
- Automated code reviews do not need to have any branch specified.

## Support for multiple branches

Multiple branches are allowed for a project if the owner of the project
(user or group) is Silver of Gold. If the owner is at the Basic level, you cannot
support multiple branches.

## Default branch

When the default branch is not set, Codiga uses the default
branch of your repository, similar to which branch would be have checked
out when you run `git clone <url-of-repository>`.

For GitHub and Bitbucket accounts, the default branch used for push notifications
are `master` and `main`, respectively.
You can change the default branch name for Silver and Gold accounts. If you are a Basic account, only push requests
for `main` and `master` will be allowed.

Basic accounts can only use the default branch for analysis. Note
that these restrictions do not apply for pull requests.

## How to track more branches

**Note**: you can only support multiple branches if the owner of the project
(user or group) is Silver or Gold. If the owner is at the Basic level, you cannot
support multiple branches.

To track more branches, go to your project preferences. In the branch section,
add the list of branches you want to support, as shown below.

**Important**: you have to set up a default branch before tracking other branches.

![Manage GitHub App menu entry](/img/branch-compare.png)

## Show dashboard for a specific branch

You can display the dashboard for a project for a particular branch.
By default, the default branch is shown. You can specify the branch to show
using the selector as shown below.

![Compare projects and their branches](/img/branch-dashboard.png)

## Show analyses for a specific branch

You can display the list of analyses for a project for a particular branch.
By default, the default branch is shown. You can specify the branch to show
using the selector as shown below.

![Compare projects and their branches](/img/branch-analyses.png)

## Comparing branches

You can compare projects and their different branches. Click on
the _Compare_ entry on the left menu and select the project with
its branch. When a project has multiple branches, it is then
shown such as _project/branch_ where _project_ is the name
of the project and _branch_ is the name of the branch.

![Compare projects and their branches](/img/branch-compare.png)
