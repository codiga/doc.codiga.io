---
id: git-hooks
title: Codiga - Using Git Hooks to Check your Code before pushing
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

## Why using hooks with Codiga?

Using hooks with Codiga, you can check your code before pushing it.
You invoke Codiga to check your code on what has been modified.

It shows you all errors before you push your code and send it for review.
That way, no error or warnings are triggered by Codiga during
the Code Review since you checked everything before pushing the code!
In other words, it helps you doing faster code reviews.

## Setup

### Install citool

The first step is to install our `codiga-pre-hook-check` tool
that is distributed in the `codiga` Python package. To install it,
just run the following command:

```bash
pip install codiga
```

### Environment variables

In order to use the tool, you need to define the following variables:

- `CODIGA_API_TOKEN`: your API token

These API keys are available in [your API tokens](https://app.codiga.io/api-tokens).

### Configure your Git hooks

You need to add a script in your Git repository to integrate with Codiga
and check for violations at each push.

Create the `.git/hooks/pre-push` in your Git repository and make sure
to make it executable (`chmod a+x .git/hooks/pre-push`).

The tool is invoked with the local and remote SHA. It also needs the name
of the corresponding project on Codiga (the argument `<project-name>`).

Replace `<project-name>` with the name of your project on Codiga so that
it will filter violations according to your project configuration.

```bash
#!/bin/sh

remote="$1"
url="$2"

z40=0000000000000000000000000000000000000000

while read local_ref local_sha remote_ref remote_sha
do
  codiga-pre-hook-check --project-name "<project-name>" --remote-sha $remote_sha --local-sha $local_sha
  if [ "$?" -ne "0" ]; then
     echo "Codiga found errors"
     exit 1
  fi
done

exit 0
```

### Additional options

You can use some additional options with `codiga-pre-hook-check` to filter
some violations or categories.

- `--exclude-categories`: exclude categories of violations. Separate multiple categories
  using a comma. For example `--exclude-categories=Performance,Code_Style,Design` will
  reports all issues in the code being pushed but the one that are classified
  under the performance, code style or design categories.
- `--exclude-severities`: exclude categories of severities. Separate severities
  are specified using a comma. Severities are specified by number, 4 being the lowest
  and 1 the highest severity. The option `--exclude-severities=3,4` reports
  all violations but the one with the severity 3 and 4.

## Important notes

When using the `pre-push` script, your code is being sent to the Codiga
servers for analysis. The analysis is not local, it is done directly
on Codiga servers to avoid any load on your local machine.

## Bug reports

If you have any issue with the `pre-push` script, please open
an issue on our [GitHub project](https://github.com/codiga/clitool/issues).
