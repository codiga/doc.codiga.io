---
id: integration-github
title: Codiga GitHub Integration for Automated Code Reviews and Code Analysis
description: Check your code quality with Codiga for all GitHub repositories. Work for for 12+ languages. Free 14 days trial.
keywords:
  [
    github,
    github application,
    github marketplace,
    codiga,
    static analysis,
    static code analysis,
    continuous integration,
    ci/cd pipeline,
    code verification,
    security analysis,
    CWE,
    CVE,
  ]
---

## GitHub Accounts

When you log into Codiga with GitHub, you have to use our
[GitHub App](https://github.com/apps/codiga) to allow repositories to be shared
with Codiga. Only the repositories you select can be used on Codiga.

![Manage GitHub App menu entry](/img/github-app.png)

## GitHub App

You can install the GitHub App on individual and organization accounts.

- If you install the GitHub App on an individual account, only you will have access to the results
- If you install the GitHub App on an organization account, the organization will be mapped into
  a group on Codiga and all members of the organization have access to the projects.

### Projects Management

Adding or removing projects is done directly on Codiga. Only the projects you
selected in the GitHub App can be used on Codiga.

### Group Management

GitHub users cannot create groups directly on Codiga. Instead, GitHub organization
are mapped into groups. When logging on Codiga, the platform detects
if any organization you belong to is on Codiga and automatically adds
you to it if you belong to it.

You can also add more users on a Codiga group in the group preferences.

### Automated Code Review

GitHub accounts are automatically enrolled in automated code review: when a pull request
is created, the engine compares the new code with the previous one and annotate the pull
requests with the various violations, code duplicates and complex/long functions.

That way, code issues are automatically detected before pushing change. Automating
code reviews also save significant developers time since it catches small errors
before human reviewers do it.

**Note**: automated code reviews work only on GitHub App.

### Permissions and Security

Our engine can access only repositories you gave access to when you selected
the list of repositories you want to get access to. For that reason,
pull requests from other repositories cannot be processed since the GitHub
app has not granted access to these repositories.

We is a design decision: we wanted to design Codiga with user
privacy in mind.

## Supported features

- Login
- Select Repository through list
- Automated Code Review (pull request being commented)
