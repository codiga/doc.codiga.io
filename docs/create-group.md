---
id: create-group
title: Codiga Create Group Documentation
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

## Create a group

Once logged, click on the menu item _Groups_ and select the _New Groups_ tab.

![Add groups](/img/create-group-01.png)

Click on the code repository provider that you want to connect (GitHub, GitLab or Bitbucket)


### For GitHub

**Note**: GitHub users cannot create groups. For more information, read the [GitHub integration guide](integration-github.md).

![Add groups](/img/create-group-02.png)

Click the _Install App_ button to install the Codiga App in the GitHub account associated.


If you don't see your group, install the Codiga App on your user account or organization.

**Note**: If you previously installed the Codiga App on a User or Group, remove the app and reinstall it to renew your installation.


### For GitLab

Click the _Link my GitLab Account_ button.

![Add groups](/img/create-group-03.png)

You will be redirected to _User Preferences_, then click the _Link Account_ button for GitLab.

![Add groups](/img/create-group-04.png)

You have linked your GitLab account. To unlink your account anytime, go to _User Preferences_, and click the _Unlink_ button.

![Add groups](/img/create-group-05.png)

 Now, let's create groups for GitLab. Click on the menu item _Groups_, click the _New Groups_ tab, and select GitLab. Now you can see the a list of your projects. To join an existent group, click on the _Join Group_ button on the right side of the screen. To create a new group, click on the _Create Group_ button.

![Add groups](/img/create-group-06.png)

Once you have joined or created a group, you will be redirected to _My Groups_ tab.

![Add groups](/img/create-group-07.png)


### For Bitbucket

Click the _Link my Bitbucket Account_ button.

![Add groups](/img/create-group-08.png)

You will be redirected to _User Preferences_, then click the _Link Account_ button for Bitbucket.

![Add groups](/img/create-group-04.png)

You have linked your Bitbucket account. To unlink your account anytime, go to _User Preferences_, and click the _Unlink_ button.

![Add groups](/img/create-group-09.png)

 Now, let's create groups for Bitbucket. Click on the menu item _Groups_, click the _New Groups_ tab, and select Bitbucket. Now you can see the a list of your projects. To join an existent group, click on the _Join Group_ button on the right side of the screen. To create a new group, click on the _Create Group_ button.

![Add groups](/img/create-group-10.png)

Once you have joined or created a group, you will be redirected to _My Groups_ tab.

![Add groups](/img/create-group-07.png)



## Adding users to the group

**Note:** You need to have administrator privileges for the specific group to add users.

### Add a Codiga user

If the user already have a Codiga account, enter the following information: 

- **Username:** The GitHub, GitLab or Bitbucket username. For Google accounts enter the user's Gmail address.
- **Account type:** The account provider (GitHub, Gitlab, Bitbucket or Google).
- **Permission:** Assign permissions to the user:
  - **Read-only:** can access to the group projects and read the data but cannot do any modification (such as adding other users, deleting projects, etc.)
  - **Administrator:** can add new users, delete projects and have the same rights as the group owner.

![Add user](/img/group-add-user-01.png)

You can see the list of invited users in the _Members_ section. To remove users from this group, click on the _Revoke_ button. To manage permissions, click in the _More_ button. You can also block users to join this group by themselves.

![Add user](/img/group-add-user-02.png)

### Invite a user

If the user doesn't have a Codiga account, enter the following information:

- **Email:** The user's email.
- **Permission:** Assign permissions to the user:
  - **Read-only:** can access to the group projects and read the data but cannot do any modification (such as adding other users, deleting projects, etc.)
  - **Administrator:** can add new users, delete projects and have the same rights as the group owner.

![Add user](/img/group-add-user-03.png)

You can check the status of the invites in the _Pending Invitations_ section. Click on the _Revoke_ button to remove the invite for a user.

![Add user](/img/group-add-user-04.png)