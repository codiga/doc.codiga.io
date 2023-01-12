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

Git hooks are scripts that run automatically every time certain events occur in a Git repository.
These events can include actions such as committing, pushing, and merging changes. For these actions,
you could use the `pre-commit`, `pre-push`, or `pre-merge` hook to run a script before completing that action.

You can view a full list of possible hooks in the [Git documentation](https://git-scm.com/docs/githooks).

## What git hook does Codiga support?

We offer support for the `pre-push` hook.

We only support the `pre-push` hook because we believe in committing code often. If we were to use the
`pre-commit` hook that would go against that. So developers can commit freely, but once you're ready to
push your code, Codiga will be there to catch any violations. This way you're assured that the code you
pushed is violation free.

:::info

In order for our `pre-push` hook to work, your project **MUST** have
a `codiga.yml` file. Make sure you have added a `codiga.yml` to your root folder with the
list of rulesets you'd like your project to check. You can view all our publically available rulesets
on the [Codiga Hub](https://app.codiga.io/hub/rulesets).

:::

## Why use hooks with Codiga?

Integrating our `pre-push` hook is super simple and effective.

We check your code that has been modified before pushing it and show you any violations that have
been detected.

This way, if your changes have violations or warnings, we'll exit your `git push` to allow you to
make the necessary changes, so you don't end up pushing bad code for review.

:::info

If you're in a rush and accept the risks, you can always bypass our `pre-push` hook by adding
a `--no-verify` flag to your `git push` command. Bare in mind, if you have configured your project
on Codiga, you'll still be able to review any bypassed violations or warning in your project page.

:::

## Setup

### Install Node.js

To use our `pre-push` hook, you'll need to ensure you have Node.js downloaded on your machine.

> If you don't have it installed, go to [download Node.js](https://nodejs.org/en/download/) now.

You can see if Node.js is installed with the following command:

```bash
node -v
```

### Create a `.git/hooks/pre-push` script

Now create a `.git/hooks/pre-push` file and paste the following:

```bash
#!/bin/sh

while read local_ref local_sha remote_ref remote_sha
do
  npx @codiga/cli git-push-hook --remote-sha $remote_sha --local-sha $local_sha
done

exit 0
```

:::info

Depending on your existing setup, you may need to run `chmod a+x .git/hooks/pre-push`
to make the script above executable.

:::

### On your first push

On your first `git push`, you and/or any of your team developers, will be prompted to set a Codiga API token.

If you wish to set your token beforehand, in your terminal you can:

- install the Codiga CLI tool globally with: `npm i @codiga/cli`
- run `codiga token-add` to get started

> Any token set here will be available to your `pre-push` hook.

## Important notes

When using the `pre-push` script, your code is being sent to the Codiga
servers for analysis. The analysis is not local, it is done directly
on Codiga servers to avoid any load on your local machine.

## Related Links

- [GitHub project](https://github.com/codiga/codiga-cli)
- [NPM package](https://www.npmjs.com/package/@codiga/cli)

## Support

If you have any issues with the `pre-push` script:

- open an issue on our [GitHub issues page](https://github.com/codiga/codiga-cli/issues)
- get support directly on our [Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)
- contact us through [Codiga support](https://www.codiga.io/contact-us/)
