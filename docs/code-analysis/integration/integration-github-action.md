---
id: github-action
title: GitHub Action Integration
sidebar_label: GitHub Action
description: Check your code quality with Codiga and GitHub Actions for 12+ languages and all code hosting platforms. Free 14 days trial.
keywords:
  [
    github,
    github actions,
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

The Codiga GitHub action is available [**here**](https://github.com/marketplace/actions/codiga-github-action)

## What is the Codiga GitHub action?

The [Codiga GitHub action](https://github.com/marketplace/actions/codiga-github-action)
analyzes your code according to your own quality criteria. The action can be chained to other actions to gate
testing or deployment actions. The diagram below illustrates how the action
can be used in a workflow.

![The Codiga GitHub action](/img/github-action.png)

## How to use it?

All installation instructions are available [**on the GitHub marketplace**](https://github.com/marketplace/actions/codiga-github-action).

You can check an example of how to use the GitHub action on the [github-action-example project on GitHub](https://github.com/codiga/github-action-example).

## How different is the GitHub Action from the GitHub App?

The Codiga GitHub App is a full integration of Codiga
capabilities with GitHub whereas the [GitHub Action](https://github.com/marketplace/actions/codiga-github-action)
only supports code quality checks.

When installing the [GitHub App](https://github.com/marketplace/code-inspector), Codiga is notified of each push or
pull and updates the project data accordingly. The GitHub App also supports
automated code reviews and annotate the code modification with
any defect that has been introduced.

To use the [GitHub App](https://github.com/marketplace/code-inspector),
you need to use Codiga with your GitHub account (log using a GitHub account)
When using the GitHub action, you can use any account on Codiga.

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue [directly on GitHub](https://github.com/codiga/codiga/issues).
