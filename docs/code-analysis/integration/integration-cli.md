---
id: cli
title: Codiga CLI (Command-Line Interface)
sidebar_label: CLI
description: Integrate and interact with Codiga easily in your developer environment using our CLI tool
keywords:
  - code analysis
  - static analysis
  - configuration
  - api token
  - git
  - git hooks
  - cli
---

## What is a CLI tool?

A command-line interface (CLI) tool is a type of software that allows you to interact with it by typing
commands in a text-based interface. These commands are typically entered into a command prompt or terminal
window, and are used to perform various tasks.

## Getting Started

Ensure you have Node.js installed first. You can do that by running the following in your terminal.

> If you don't have it installed, go to [download Node.js](https://nodejs.org/en/download/) now.

```bash
node -v
```

There are two ways to interact with the tool.

The most convenient method is by installing it globally with the following command.

```bash
npm i -g @codiga/cli
```

You can then interact with the tool using the `codiga` command, as it's available globally.

```bash
codiga --help
```

Another method is using `npx` to download and execute a one-time command.

```bash
npx @codiga/cli --help
```

The outcome of these two `--help` commands will be the same.

> We will be using the shorthand `codiga` version for simplicity's sake onwards. Just know that you
> can swap out `codiga` for `npx @codiga/cli` at any point and still achieve the same thing.

:::tip

In our `pre-push` [git hook documentation](/docs/code-analysis/integration/git-hooks), we recommend using the following
`npx` form as it's simpler to share amongst teams.

:::

## Features

### Create or add rulesets to a `codiga.yml`

To create a `codiga.yml` file with rulesets or to quickly add new rulesets to a `codiga.yml` file, we offer a single command.

If you run the command below, we'll open an interactive menu where we can suggest languages and rulesets, and you can choose which ones to use.

```bash
codiga ruleset-add
```

If you know what rulesets you want to add, you can pass their names into the command like you see below.

```bash
codiga ruleset-add my-public-ruleset my-private-ruleset
```

:::info

Remember to run this command in your project's root directory. If we detect a `codiga.yml` file, we will add the given/chosen rulesets to it. If you don't have a `codiga.yml` file, we'll create one for you.

:::

### Analyze and report issues for a file or directory

#### Single File

To analyze a single file named `file.js` you can could run the following commands. The first command would analyze `file.js` for violations with the rules found in `foo-ruleset` and the second command would include the rules from `bar-ruleset` too.

```bash
codiga analyze file.js --ruleset foo-ruleset
```

```bash
codiga analyze file.js --ruleset foo-ruleset --ruleset bar-ruleset
```

:::info

When analyzing a single file, a valid ruleset **must** be set using the `--ruleset` [option](/docs/code-analysis/integration/cli/#options).

:::

#### Directory

To analyze a directory and all the files within, you could run any of the following commands to target the directory `foo`.

```bash
codiga analyze foo
```

```bash
codiga analyze ./foo
```

```bash
codiga analyze /Users/cool-name/foo
```

When analyzing a directory it isn't necessary to specify a ruleset using `--ruleset`, **if** you have a `codiga.yml` file in the targeted directory. If there isn't a `codiga.yml` and you haven't specified rulesets in the command, the analyze will exit.

:::tip

You can find rulesets to use on the [Codiga Hub](https://app.codiga.io/hub/rulesets) or you can use a [command introduced above](/docs/code-analysis/integration/cli/#create-or-add-rulesets-to-a-codigayml), `codiga ruleset-add`, to create a `codiga.yml` quickly.

:::

#### Options

- `-r/--ruleset`
  - Specify the rulesets you want your analysis done with
    - **Required:** when analyzing a single file or when there isn't a `codiga.yml` in the root targeted directory
    - **Default:** `codiga.yml`
    - **Notes:** if set, will override a `codiga.yml`
- `-f/--format`
  - Specify the format you want your analysis reported in
    - **Options:** `text`, `json`, `csv`
    - **Default:** `text`
- `-o/--output`
  - Specify where you want your analysis reported to
    - **Default:** `stdout`
    - **Examples:** `results.csv`, `violations.json`, `analysis.text`
    - **Notes:** If there are no violations, no file will be created.
- `--follow-symlinks`
  - Specify if you want to follow and analyze symbolic links
    - **Default:** false

### Analysis and report issues between two commits

To check for violations between two commits manually, you can use the following command.

```bash
codiga git-push-hook --remoteSha 123 --localSha 456
```

In the example above, `123` would be your remote SHA and `456` would be your local SHA. By passing these two commit SHA values to the script, we're able to check any modified files for errors or violations and report them to you.

:::tip

We've dedicated a whole page, [Git Hooks](/docs/code-analysis/integration/git-hooks), for you to read more on how to setup our Git `pre-push` hook. Once set up, the hook can get your SHA values automatically and run the command above for you on each `git push`.

:::

:::info

To run the command, `codiga git-push-hook`, you will need to have a valid Codiga API token set. If you do not have a valid API token set, our CLI will prompt you to enter one. We detail how to set a Codiga API token in the [Adding a Codiga API token](/docs/code-analysis/integration/cli/#adding-a-codiga-api-token) section below.

:::

### Adding a Codiga API token

Simply run the following command to get started on adding a Codiga API token.

```bash
codiga token-add
```

### Checking a Codiga API token

To check your Codiga API token status, you can run the following command.

```bash
codiga token-check
```

### Deleting a Codiga API token

To delete a Codiga API token from your machine, please run the following.

```bash
codiga token-delete
```

:::info

**Note:** this will only delete the token from your local machine. If you would like to completely delete a Codiga API token, you can do that on our [API token](https://app.codiga.io/api-tokens) page

:::

### Help

To view a list of all commands and some information regarding them, run the following command.

```bash
codiga --help
```

To view more information for a certain command, run one of following commands.

```bash
# git push hook
codiga git-push-hook --help
# token add
codiga token-add --help
# token check
codiga token-check --help
# token delete
codiga token-delete --help
# adding rulesets
codiga ruleset-add --help
# analyzing file or directory
codiga analyze --help
```

### Version

To check your Codiga CLI version, run the following command.

```bash
codiga --version
```

## Related Links

- [GitHub project](https://github.com/codiga/codiga-cli)
- [NPM package](https://www.npmjs.com/package/@codiga/cli)
- [Git pre-push hook](/docs/code-analysis/integration/git-hooks/)

## Support

If you have any issues with the CLI tool:

- open an issue on our [GitHub issues page](https://github.com/codiga/codiga-cli/issues)
- get support directly on our [Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)
- contact us through [Codiga support](https://www.codiga.io/contact-us/)
