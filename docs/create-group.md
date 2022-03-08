---
id: create-group
title: Create Group
description: Create an group on Codiga to analyze your code and automated your Code Reviews on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
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

**Note**: creating a group is optional. You only need one if you want to share
your projects with other users. If you are creating a project for yourself,
you can safely skip this step.

## What is a group?

A group assembles users together so that they can share projects together.

**Note**: GitHub users cannot create group. For more information, read the [GitHub integration guide](integration-github.md).

## Create a group

Once logged, click on the menu item _Group_ and select _New Group_.

![Manage GitHub App menu entry](/img/create-group.png)

Enter your group name and validate. You can see the group on the left sidebar.

## Adding user to the group

To add an user to a group, first go to the group preferences. Then, click in the form
to add an user, enter this user identifier and assign permissions:

- **Read-only**: can access to the group projects and read the data but cannot do any modification (such as adding other users, deleting projects, etc.)
- **Administrator**: can add new users, delete projects and have the same rights as the group owner.

**Note**: you can only add _regular user_ in a group.

![Add user](/img/group-add-user.png)

Once the user is added, you should see them immediately as active users (members)
of the group, as shown below.

![User added](/img/group-add-user-added.png)
