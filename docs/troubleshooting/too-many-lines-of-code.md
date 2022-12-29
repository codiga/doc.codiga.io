---
id: too-many-lines-of-code
title: Codiga Troubleshooting - Too many lines of code
sidebar_label: Too Many SLOCS
description: Troubleshoot analysis issues on Codiga for GitHub, GitLab and Bitbucket and spot any security or vulnerability issue. Support for 12+ languages, start for free today.
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

## Description of issue

Depending on the plan you're subscribed to, you can run the analysis on projects with a maximum amount of lines of code (for more information about the limits of your subscription, see [Our Subscription Plans](https://www.codiga.io/pricing)).

In case you want to run the analysis on a project with more lines of code than the ones supported by your subscription, you'll see something like this on your home page:

![Too Many Lines of Code Card](/img/troubleshooting/too-many-lines-of-code-card.jpg)

Here are some ways to avoid this issue:

1. **Gitignore your external dependencies:**

   Having the external dependencies in your remote repository is considered a bad practice in general, and it can also be the reason you exceed your lines of code quota in Codiga. To fix this you can create a [.gitignore file](https://git-scm.com/docs/gitignore) where you include the external dependencies folder so it's not tracked with the rest of your code.
   If you need references take a look at these [.gitignore templates for different languages](https://github.com/github/gitignore).

2. **Add .ci-ignore to your project:**
   Similar to `.gitignore`, but specific to Codiga, the `.ci-ignore` file contains the files and folders that should be ignored when running the analysis. This is another way you can prevent reaching your maximum lines of code quota. For more information see [Ignore Files and Violations](https://doc.codiga.io/docs/ignore-files/).

3. **Upgrade your plan:**
   If you need to run the analysis on larger projects, and you already prevented unnecessary files to be tracked by Git or Codiga, you can upgrade your subscription plan such that enough lines of code are allowed per repository. See our [Upgrade Account](https://app.codiga.io/account/upgrade) page for more information. If you need a custom plan, do not hesitate in [contacting us](https://codiga.io/contact-us/).
