---
id: faq
title: Codiga Frequently Asked Questions
description: Frequently Asked Questions about Codiga, Project Analysis and the static code analysis used to Automate Code Reviews.
keywords:
  - code analysis
  - technical debt
  - static analysis
  - configuration
  - code reviews
  - github
  - gitlab
  - GraphQL
  - Codiga API
  - git
  - git hooks
---

## Metrics

### What is the Code Quality Score?

The Code Quality Score is an aggregate of quality metrics (detects, duplicates, long and complex functions).
This value indicates how good or bad your code is. To compute the code quality score, we take into account:

- the defects per line of code
- the ratio of duplicated lines of code
- the ratio of complex functions using cyclomatic complexity
- the ratio of long functions

### What is the Code Quality Grade?

The Code Quality Grade is an easier visualization of the Code Quality Score, nothing more.

## GitHub Integration

### When I import the projects on GitHub, only some of them are added. What is wrong?

If not all your repositories are being added, this is very likely you are hitting the limits of the number of
projects for your account. See [the GitHub integration](/docs/integration-github) for more information.

## Bitbucket integration

### Do you have a Bitbucket App?

Yes, you can learn everything about it in the [dedicated page](/docs/integration-bitbucket)

## Notifications

### How do I stop receiving emails?

Go in your project preferences (see below) and delete the email you do not want to receive
notifications on.

![Project Preferences](/img/project-preferences.png)

## Pull Requests

### I do not have automated code reviews, what is happening?

If you are using a regular account and have just a link to your GitHub account,
that is normal since automated code reviews are only done for users
that log with GitHub. If you want to have automated pull requests, log
using your GitHub account and use our GitHub app.

### Can I customize pull requests?

Yes. In your preferences, you can choose what metrics are reported
on the pull request.

### Can I disable automatic code reviews on pull requests?

Yes, go in your project preferences and disabled the option
`Pull requests enabled`.

### Can I disable what is being surfaced in pull requests?

Yes, in your project preferences, you can tweak what metrics
you want to be shown and surfaced. See the screenshot below as to what
to look for.

![Project Preferences](/img/project-preferences-pull-request.png)

## Analyses on push

### Can I disable automatic analyses on push?

Yes, go in your project preferences and disabled the option
`Push notification enabled`.

## Quota

### How do quota works?

If you start an analysis on Monday at 8am and do 20 other analyses that day,
analyses will start to be dropped at the eleventh request. In other words, all
analyses sent after the tenth request are dropped until Tuesday at 8am.

The quota will start to replenish again starting Tuesday at 8am.
Any request after Tuesday 8am will be accepted.

### How quota is consumed?

Any push requests consumes one quota element.

Pull requests can take up to two analyses.
However, our engine attempts to reuse previous analyses to avoid to waste quota.
For example, if you are doing a pull request, we will initially analyze
the source and the destination revisions, taking 2 analysis from your quota.
When the code of the pull request is updated, only the target is analyzed again,
taking only one analysys from your quota.

## Analysis

### What languages are supported?

Apex, C, C++, Dart, Docker, Go, Java, Javascript, Kotlin, PHP, Python, Ruby, Scala, shellscript, Terraform, Typescript, YAML.

Do you want your favorite language to be supported? [Drop us](https://www.codiga.io/contact-us/) a line!

### I got a lot of false positive for javascript related to the ES version

You can set up the ES version in the project preferences. Set the version according to the project settings.

## Payments

### How can I change my membership?

At that time, we only support upgrade via a paid membership on a GitHub account.

### When do you plan to have upgrade for regular accounts?

We plan to have a payment processing integration in Q2 2020.

## Privacy

### How long do you keep the code on your servers?

We keep the code only during the analysis. We automatically delete it afterwards.
We copy the section that are relevant to our analysis in the database and it is limited to the section
of code you can see in the duplicates section.

### What personal information do you keep on your server?

We only keep your username and profile. We do not sell any data related to your code.
Our model is based on a pay per use basic: you pay for a product we hope you enjoy
and do not try to sell any other data.
Note that we use google analytics to track visitors on the platform.

### How do you use my data?

We solely use the data for code analysis purposes. We do not sell the data
to any third party vendor.

## Tools

These are the tools we are using on our platform.

- [Bandit](https://github.com/PyCQA/bandit): Security Analysis of Python code
- [Checkov](https://www.checkov.io/): Terraform and Docker
- [Cppcheck](http://cppcheck.sourceforge.net/): C/C++ analysis
- [Dartanalyzer](https://dart.dev/tools/dartanalyzer): DART analysis
- [Detect-Secrets](https://github.com/Yelp/detect-secrets): Secrets detection
- [Detekt](https://github.com/detekt/detekt): Kotlin analysis
- [ESLint](https://eslint.org/): JavaScript and TypeScript
- [Gosec](https://github.com/securego/gosec): Go analysis focused on security
- [JSCPD](https://github.com/kucherenko/jscpd): duplicates analysis
- [Lizard](https://github.com/terryyin/lizard): complexity and length metrics
- [PHP Mess Detector](https://phpmd.org/): PHP Analysis
- [PMD](https://pmd.github.io/): Java and APEX
- [Pylint](https://www.pylint.org/): Python Analysis
- [Reek](https://github.com/troessner/reek): Ruby Analysis
- [Revive](https://revive.run/): Go analysis
- [Scalastyle](http://www.scalastyle.org/): Scala Analysis
- [Staticcheck](https://staticcheck.io/): Go analysis
- [Shellcheck](https://www.shellcheck.net/): bash/sh Analysis
- [Yamllint](https://github.com/adrienverge/yamllint): YAML analysis
