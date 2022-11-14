---
id: git-hooks
title: Codiga - Using Git Hooks to Check your Code before pushing
sidebar_label: Git Hooks
description: Automatically trigger a code analysis using Git Hooks and ensure that your code meets your code quality criteria.
keywords:
  - code analysis
  - technical debt
  - static analysis
  - configuration
  - git
  - git hooks
---

## What are Git hooks?

Git hooks are scripts you execute before an action is performed. It can be
`pre-push`, `pre-merge`, `pre-rebase`. Often, developers use them to perform
some checks on the commit being pushed, either on the commit title, message
or the code itself.

:::info

The Git hook script uses the Codiga static analyzer. Your project **MUST** have
a `codiga.yml` file at its root. Make sure you added a `codiga.yml` with the
list of rules to check for your project. You can get the list of rules on the
[Codiga Hub](https://app.codiga.io/hub/rulesets).1

:::

## Why use hooks with Codiga?

Using hooks with Codiga, you can check your code before pushing it.
You invoke Codiga to check your code on what has been modified.

It shows you all errors before you push your code and sends it for review.
That way, no errors or warnings are triggered by Codiga during
the Code Review since you checked everything before pushing the code!
In other words, it helps you do faster code reviews.

## Setup

### Install Codiga `clitool` tool

The first step is to install our `codiga-git-hook` tool
that is distributed in the [`codiga` Python package](https://pypi.org/project/codiga/).
To install it, run the following command:

```bash
pip install codiga
```

### Environment variables

To use the tool, you need to define the following variables:

- `CODIGA_API_TOKEN`: your API token

These API keys are available in [your API tokens](https://app.codiga.io/api-tokens).

To make this change persistent, you need to add the variable to your `.bashrc` or `.zshrc`.

For zsh users (common for Mac OS X):

```bash
echo 'CODIGA_API_TOKEN="<CODIGA-TOKEN-VALUE>"' >> $HOME/.zshrc
```

For bash users (common the Linux):

```bash
echo 'CODIGA_API_TOKEN="<CODIGA-TOKEN-VALUE>"' >> $HOME/.bashrc
```

:::warning

Make sure either `.bashrc` or `.zshrc` are not readable by other users.

:::

### Configure your Git hooks

You need to add a script in your Git repository to integrate with Codiga
and check for violations at each push.

Create the `.git/hooks/pre-push` in your Git repository and make sure
to make it executable (`chmod a+x .git/hooks/pre-push`).

The tool is invoked with the local and remote SHA.

There is how you invoke the tool.

```bash
#!/bin/sh

remote="$1"
url="$2"

z40=0000000000000000000000000000000000000000

while read local_ref local_sha remote_ref remote_sha
do
  codiga-git-hook --remote-sha $remote_sha --local-sha $local_sha
done

exit 0
```

## Important notes

When using the `pre-push` script, your code is being sent to the Codiga
servers for analysis. The analysis is not local, it is done directly
on Codiga servers to avoid any load on your local machine.

## Bug reports

If you have any issues with the `pre-push` script, please open
an issue on our [GitHub project](https://github.com/codiga/clitool/issues).

## Support

- **GitHub project**: you can report bugs on the [GitHub project](https://github.com/codiga/clitool/issues)
- **Slack**: You can also get support directly on our [Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ).
