---
id: create-project
title: Codiga Create Project Documentation
description: Create an project on Codiga to analyze your code and automated your Code Reviews on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
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

## Creating Projects for GitHub users

If you are a GitHub user, all projects are being created using
our GitHub App. In order to add or remove a project, you need
to specify the projects to be analyzed on the GitHub App configuration.

To access to the GitHub app configuration, select _Manage GitHub App_ under
your _My Profile_ option, as shown below.

![Manage GitHub App menu entry](/img/create-project-github.png)

## Create Projects for regular Gitlab and Bitbucket accounts

### Step 1: Type and name

![Repository Type and Name](/img/create-project1.png)

The first step is to specify the type and name of the project:

- **Type**: a project can be either an individual or a group project. An individual
  project means that only you can access the project. On the other hand, a group project can be accessed by all members of the group.
- **Name**: use an alphanumeric name for your project. This name will be used to distinguish your project.

### Step 2: Repository Provider

The second step is to choose the repository provider.
You can either use a repository from a popular provider (e.g. GitHub, Gitlab or Bitbucket) or specify a custom URL. If you want to use a repository from a provider, you need
to either login using this provider or the link to your Codiga account with this provider.
You can link your account going to your user preferences page.

Note that when using a provider, you will get additional features such as displaying the
file content on the Analysis view.

![Repository Provider](/img/create-project2.png)

### Step 3: Repository URL

Finally, select the repository you want to use. When using a repository from a provider,
you have to select the repository from a list. If no repository is available, make sure
you correctly linked your account with this provider.

If you decided to just specify a URL, enter the **clone URL** in the textfield.

Once you enter the repository URL, the analysis results will be available in just few minutes.

![Repository URL](/img/create-project3.png)
