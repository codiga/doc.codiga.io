---
id: integration-aws-codebuild
title: Codiga - AWS CodeBuild Integration for Code Analysis
sidebar_label: AWS CodeBuild
description: Check your code quality with Codiga and AWS CodeBuild for 12+ languages and all code hosting platforms. Free 14 days trial.
keywords:
  [
    aws,
    aws build,
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

## Integrating with AWS CodeBuild

The integration in AWS CodeBuild lets you check the code quality using
Codiga as you build your software. If your code does not meet
some code quality requirements, the build will fail and not ship into production.

Once you are integrated with the AWS CodeBuild, you can then add this test in
a code pipeline and avoid any changes with errors to be pushed into production.

## Setting up your environment

First, create an AWS CodeBuild to build your software. You need to define
the following three variables in your build environment:

- `CODIGA_API_TOKEN`: API token you get from your [tokens page](https://app.codiga.io/api-tokens)
- `CODIGA_PROJECT_NAME`: name of the project on codiga

To define these variables, first, edit the CodeBuild configuration as shown below.

![Change the AWS CodeBuild configuration](/img/aws-codebuild-edit.png)

Define the environment variables, as shown below. Note that for the
`CODIGA_API_TOKEN`, you need to
set the values retrieved from your [profile page](https://app.codiga.io/api-tokens).

![Enter configuration variables](/img/aws-codebuild-environment.png)

## Editing your `buildspec.yml` file

The next step is to edit your `buildspec.yml` (or any build specification you
use for this project) in order to add commands to install and invoke
`codiga-check-quality`.

1. Installing the tool is done using `pip`. To install the tool, you need to use `pip install codiga`
2. Invoking the tool `codiga-check-quality` lets you set the requirements for your code quality gate.

There is an example of how to modify your `buildspec.yml` to install the tool
and check that the quality score of the project for the current commit is higher than 75.

```yaml
version: 0.2

phases:
  install:
    commands:
      - apt-get update -y
      - apt-get install apt-transport-https gnupg -y
      - pip install codiga
    finally:
      - echo Preliminary tasks done
  pre_build:
    commands:
      - codiga-check-quality --project "${CODIGA_PROJECT_NAME}" --min-quality-score 75  --sha "${CODEBUILD_RESOLVED_SOURCE_VERSION}" --max-timeout-sec 60
    finally:
      - echo pre-build done
  build:
    commands:
      - echo Entering the build phase
    finally:
      - echo build done
  post_build:
    commands:
      - echo Entered the post_build phase...
      - echo Build completed on `date`
```

Important notes:

1.  Invoking the tool requires that you define `CODIGA_API_TOKEN` and `CODIGA_PROJECT_NAME`. Otherwise, it will not start
2.  We analyze the revision being pushed. We use the `CODEBUILD_RESOLVED_SOURCE_VERSION` environment variable set up
    by CodeBuild to retrieve that information.
3.  If the tool does not complete within 60 seconds, it fails.

## Results

Once your file is committed, you can see the execution of the tool directly
in the CodeBuild execution trace, as shown below. When the tool fails, it will
also indicate what metrics do not meet the quality gate requirements.

![CodeBuild results](/img/aws-codebuild-results.png)

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue [directly on GitHub](https://github.com/codiga/codiga/issues).

## More information

The tool `codiga-check-quality` is developed as an open-source tool.
You can [read more and contribute to the tool on GitHub](https://github.com/codiga/clitool).
