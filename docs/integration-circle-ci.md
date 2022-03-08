---
id: integration-circle-ci
title: CircleCI Integration
description: Check your code quality with Codiga and CircleCI for 12+ languages and all code hosting platforms. Free 14 days trial.
keywords:
  [
    circleci,
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

## Integrating with CircleCI

The integration in CircleCI lets you check the code quality using
Codiga as you build your software. If your code does not meet
some code quality requirements, you can configure your pipeline to fail
and not deploy your code.

## Setting up your environment

First, you need to define the following three variables in your build environment:

- `CODIGA_API_TOKEN`: access key you get from your [tokens page](https://frontend.codiga.com/api-tokens)
- `CODIGA_PROJECT_NAME`: name of the project on Codiga

To define these variables, first, edit the CircleCI configuration and
define environment variables, as shown below. Note that for the
`CODIGA_API_TOKEN`, you need to
set the values retrieved from your [api-tokens](https://frontend.codiga.com/api-tokens).

![CircleCI Variables](/img/circleci-variables.png)

## Editing your CircleCI configuration

The next step is to edit your CircleCI configuration typically
in `.circleci/config.yml` at the root of your repository)
in order to add commands to install and invoke
`codiga-check-quality` that checks the quality of your code.

In this file, what is important is to invoke the following step:

1. Instal the Codiga tools using `pip`. To install the tool, you need to use `pip install codiga`
2. Invoking the tool `codiga-check-quality` let's you set the requirements for your code quality gate.

In the vast majority of cases, all you need is to add the following step in your configuration:

```yaml
- run:
    name: Code Quality Gate
    command: |
      pip install codiga
      codiga-check-quality --project "${CODIGA_PROJECT_NAME}" --min-quality-score 30  --sha "${CIRCLE_SHA1}" --max-timeout-sec 60
```

There is an example a full configuration for CircleCI that installs the tool
and check that the quality score of the project for the current commit is higher than 75.

```yaml
version: 2.1

orbs:
  python: circleci/python@1.2

workflows:
  sample:
    jobs:
      - build-and-test

jobs:
  build-and-test:
    docker:
      - image: cimg/python:3.8
    steps:
      - checkout
      - run:
          name: Code Quality Gate
          command: |
            pip install codiga
            codiga-check-quality --project "${CODIGA_PROJECT_NAME}" --min-quality-score 75  --sha "${CIRCLE_SHA1}" --max-timeout-sec 60
```

Important notes:

1.  Invoking the tool requires that you define `CODIGA_API_TOKEN` and `CODIGA_PROJECT_NAME`. Otherwise, it will not start and just fails.
2.  We analyze the revision being pushed. We use the `CIRCLE_SHA1` environment variable set up
    by CircleCI to retrieve that information (see [official documentation](https://github.com/circleci/circleci-docs/blob/master/jekyll/_cci1/environment-variables.md)).
3.  If the tool does not complete within 60 seconds, it fails.

## Results

Once your file is committed, you can see the execution of the tool directly
in the CircleCI execution, as shown below. When the tool fails, it will
also indicates what metrics does not meet the quality gate requirements.

![CircleCI results](/img/circleci-results.png)

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue [directly on GitHub](https://github.com/codiga/codiga/issues).

## More information

The tool `codiga-check-quality` is developed as an open-source tool.
You can [read more and contribute to the tool on GitHub](https://github.com/codiga/clitool).
