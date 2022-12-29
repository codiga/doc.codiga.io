---
id: create-project
title: Codiga Create Project Documentation
sidebar_label: Create a Project
description: Create a project on Codiga to analyze your code and automated your Code Reviews on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
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
  - CVE
---

## Create a project

### For GitHub, GitLab and Bitbucket

:::info

To create a project, you **Must** create a group on Codiga first.

:::

To create a new project, go to the _Code Analysis_ option in the main navigation bar and click the "Create New Project" button.

![Create project](/img/create-project-01.png)

Select the repository platform and click the "Create Project" button on the repository that you want to add to your project.

:::info

Private repositories are only available on paid plans. Please upgrade your subscription to create a group for them.

:::


![Create project](/img/create-project-02.png)

Click on the "Start Wizard" button to configure your project.

![Create project](/img/create-project-03.png)

Select the languages for open-source rules and click the "Codiga rules" button to configure custom rules. You can select rules later for each language in the project preferences tab.

![Create project](/img/create-project-04.png)

Explore the [Codiga Hub](https://app.codiga.io/hub) to find Codiga rules for your project. To use rules, create a `codiga.yml` file and add it to your repo. Click on the "Preferences" button at the bottom of the page to continue.

![Create project](/img/create-project-05.png)

Configure the secret detection and dependency analysis for your project. You can also add emails to notify you when the project is done or if there is an issue when performing the analysis. Click on "Branch configuration" at the bottom of the page to continue.

![Create project](/img/create-project-06.png)

Configure the branches to analyze for your project. You need to set a main branch before adding additional branches. Click on the "Pull request" button to continue.

![Create project](/img/create-project-07.png)

![Create project](/img/create-project-08.png)

Configure pull requests options for your project. Click on the "Integrations" button to continue.

![Create project](/img/create-project-09.png)

If you need to configure your project to use your own CI/CD integration pipeline, click on the logos to get more information. Click on "Invite collaborators" to continue.

![Create project](/img/create-project-10.png)

You can also invite collaborators to your project. Click on the "Finish" button to continue.

![Create project](/img/create-project-11.png)

Click on the "View Dashboard" button to finish the project wizard.

![Create project](/img/create-project-12.png)