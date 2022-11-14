---
id: ignore-files
title: Codiga - Ignore Files and Violations in Code Analysis
description: Ignore files and violations for your project in Codiga. Configure your Codiga project and ignore directories for all analyses.
keywords:
  - code analysis
  - technical debt
  - static analysis
  - configuration
---

## Introduction

There are files you do not want to include in the analysis done by Codiga,
either because they are not useful to be analyzed or you just do not want
to have them processed.

There are several ways that Codiga ignores files, we are explaining
each of them.

### Default `.gitignore` file

Codiga processes your `.gitignore` files and automatically ignores all files specified in that directory.
It does not process or parse regular expressions, our engine ignores files and directories
specified by their full name.

```
# The directory directory_to_ignore will be ignored
directory_to_ignore

```

### Optional `.ci-ignore` file

You can also add a `.ci-ignore` file in your codebase. This file is
exactly like a `.gitignore` and specific to Codiga. Put here all
the files and directories that you want Codiga to ignore.

**Note**: File and directory names are relative to the project root directory.

**Note**: You should not put the starting '/' character in the list of files/directories to ignore

All files and directories specified in that files will also **not count
towards your slocs count**. In other words, if your account has too many
lines of code, a good way to reduce the number of lines of code is
to add files/directory in that file.

You need to specify the full name of the file in the `.ci-ignore` files.

```
# The directory directory_to_ignore will be ignored
directory_to_ignore
```

#### Using regular expressions

You can use the same expression than you use in a shell in order to ignore
files.

For example, if you have the following directories

- `foo/bar/baz`
- `foo/baz/baz`
- `foo/bla/bli`

With the following content of `.ci-ignore`:

```
# The following expression will ignore foo/bar/baz and foo/baz/baz
foo/*/baz
```

Then, `foo/bar/baz` and `foo/baz/baz` will be removed while `foo/bla/bli`
will be removed.

**Note**: always specify the relative path, and remember that your path should never start with `/`.

### File configured in the User Interface

You can also ignore paths in the project configuration, as shown below,
by entering paths separated by the character `;`.

![Ignore Paths](/img/ignore-paths.png)

**Note**: You should not put the starting '/' character in the list of files/directories to ignore

When ignoring files and violations using project preferences, issues
are filtered when being surfaced through the API. In other words, these
files and directories are still analyzed but are rather filtered
in the User Interface. Therefore, directories specified in the configuration
still count as analyzed source lines of code.
