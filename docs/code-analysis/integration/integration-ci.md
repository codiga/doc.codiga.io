---
id: generic
title: Generic Continuous Integration Integration
sidebar_label: Generic CI/CD
description: Check your code quality with Codiga and integrate with your CI/CD pipeline. Available for 12+ languages and all code hosting platforms. Free 14 days trial.
keywords:
  [
    codiga,
    jenkins,
    continuous deployment,
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

## Triggering new analysis from CI

We support analysis triggers from your continuous integration job. This is very simple
to put in place, and we use a generic method that can be adapted to most continuous integration
environments such as jenkins or travis-ci.

## Installing the CI tools

Our CI tools are distributed using [PyPi](https://pypi.org). You can install them
using the following command:

```bash

$ pip install codiga

```

## Using the CI tools

### Setting your API keys

To use the CI tool, you need to set up one environment variable that
identifies you as a user: `CODIGA_API_TOKEN``.

You can get these keys from the web interface, at [this link](https://app.codiga.io/api-tokens).

**Important Note**: API keys identify you as a user and not as a project.
Actions you can perform are limited by your user permissions.

### Trigger an Analysis

To trigger an analysis (and potentially get results from it), use the
binary `codiga-analyze`.

If you pass the `-w` flag to the `codiga-analyze` binary, the program will produce
the results of the analysis, with the number of violations, duplicates as well
as the number of violations per language.

If you are working on a large project that takes time to analyze, you might
need to increase the timeout to get the analysis results using the `-t` flag.
This flag defines the value of the timeout (in seconds) before getting the analysis results.

For example, the following line will trigger a new analysis, wait at most 20 minutes
to get the analysis results and then print the results:

```bash

codiga-analyze -t 1200 -w -p "MY-AWESOME-PROJECT"

```

### Compare a project status with another branch

Sometimes, you want to compare the status of your project with another
repository or just another branch. The program `codiga-compare`
is the one you want to use in that case.

The project compares your project against another codebase hosted
on another repository. You can specify a revision (flag `--target-revision`)
or specific branch (`--target-branch`) to compare against.

You can also use your GitHub/Gitlab or Bitbucket credentials to checkout
the target repository (flag `--kind`).

You can use it as follows:

```bash

codiga-compare -t 1200 -w -p "MY-AWESOME-PROJECT" --url https://path/to/other/repository.git --target-branch development --kind Github

```

This will then start a comparison of `MY-AWESOME-PROJECT` on Codiga
with the code on the repository `https://path/to/other/repository.git` on the `development` branch.
To checkout the target repository, the GitHub credentials of the authenticated user are used.

## Integration with GitLab Continuous Integration

Mike Atkinson ([@MikeGAtkinson](https://twitter.com/MikeGAtkinson)) from [JHCTechnology](https://twitter.com/JHCTechnology)
developed a docker image that can be used to integrate Codiga
in your GitLab CI pipeline.

The project is available on GitLab: [https://gitlab.com/jhctechnology/code-quality/code-inspector](https://gitlab.com/jhctechnology/code-quality/code-inspector)

## More information and contributing

For more information about the tool used for continuous integration, you can look
at the related [GitHub project](https://github.com/codiga/clitool).
