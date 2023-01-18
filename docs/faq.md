---
id: faq
title: Codiga Frequently Asked Questions
description: Frequently Asked Questions about Codiga, Project Analysis and the static code analysis used to Automate Code Reviews.
keywords:
  - code analysis
  - technical debt
  - static analysis
  - configuration
  - code reviews
  - github
  - gitlab
  - GraphQL
  - Codiga API
  - git
  - git hooks
---

## Metrics

![Quality Score and Grade](/img/metrics-01.png)

### What is the Code Quality Score?

The Code Quality Score is an aggregate of quality metrics (detects, duplicates, long and complex functions).
This value indicates how good or bad your code is. To compute the code quality score, we take into account:

- the defects per line of code
- the ratio of duplicated lines of code
- the ratio of complex functions using cyclomatic complexity
- the ratio of long functions

### What is the Code Quality Grade?

The Code Quality Grade is an easier visualization of the Code Quality Score.

## GitHub Integration

### When I import the projects on GitHub, only some of them are added. What is wrong?

If not all your repositories are being added, this is very likely you are hitting the limits of the number of
projects for your account. See [the GitHub integration](/docs/code-analysis/integration/github) for more information.

## Bitbucket integration

### Do you have a Bitbucket App?

Yes, you can learn everything about it on the [dedicated page](/docs/code-analysis/integration/bitbucket)

## Notifications

### How do I stop receiving emails?

Go to your project preferences and click on the notifications. Go to the email notifications section to add or delete email accounts to receive notifications.

![Project Preferences](/img/project-preferences.png)

## Pull Requests

### I do not have automated code reviews, what is happening?

If you are using a regular account and have just a link to your GitHub account,
that is normal since automated code reviews are only done for users
that log in with GitHub. If you want to have automated pull requests, log in using your GitHub account and use our GitHub app.

### Can I customize pull requests?

Yes. In your preferences, you can choose what metrics are reported
on the pull request.

### Can I disable automatic code reviews on pull requests?

Yes, go into your project preferences and disabled the option
`Pull requests enabled`.

### Can I disable what is being surfaced in pull requests?

Yes, in your project preferences, you can tweak what metrics
you want to be shown and surfaced. See the screenshot below as to what
to look for.

![Project Preferences](/img/project-preferences-pull-request.png)

## Analyses on push

### Can I disable automatic analyses on push?

Yes, go into your project preferences and disabled the option
`Push notification enabled`.

## Quota

### How do quota works?

If you start an analysis on Monday at 8am and do 20 other analyses that day,
analyses will start to be dropped at the eleventh request. In other words, all
analyses sent after the tenth request are dropped until Tuesday at 8am.

The quota will start to replenish again starting Tuesday at 8am.
Any request after Tuesday 8am will be accepted.

### How quota is consumed?

Any push requests consume one quota element.

Pull requests can take up to two analyses.
However, our engine attempts to reuse previous analyses to avoid wasting quota.
For example, if you are doing a pull request, we will initially analyze
the source and the destination revisions, taking 2 analyses from your quota.
When the code of the pull request is updated, only the target is analyzed again,
taking only one analysis from your quota.

## Analysis

### What languages are supported?

Apex, C, C++, Dart, Docker, Go, Java, Javascript, Kotlin, PHP, Python, Ruby, Scala, shellscript, Terraform, Typescript, YAML.

Do you want your favorite language to be supported? [Drop us](https://www.codiga.io/contact-us/) a line!

### I got a lot of false positive for javascript related to the ES version

You can set up the ES version in the project preferences. Set the version according to the project settings.

## Payments

### How can I change my plan?

Go to the groups section by clicking the option in the main navigation. Click on the billing tab and go to the plans tab. If you already have a Basic plan, you can upgrade it to a Team plan by clicking the "Start Trial" button.

![Plans](/img/plans-01.png)

## Privacy

### How long do you keep the code on your servers?

We keep the code only during the analysis. We automatically delete it afterward.
We copy the section that is relevant to our analysis in the database and it is limited to the section
of code you can see in the duplicates section.

### What personal information do you keep on your server?

We only keep your username and profile. We do not sell any data related to your code.
Our model is based on a pay per use basic: you pay for a product we hope you enjoy
and do not try to sell any other data.
Note that we use google analytics to track visitors on the platform.

### How do you use my data?

We solely use the data for code analysis purposes. We do not sell the data
to any third-party vendor.

## Supported Keymaps

Our code editor uses `codemirror` sublime keymaps, plus some extra keymaps for your convenience, you can see the full list of keymaps for your system below

### UNIX

- `Shift-Cmd-F1`: format
- `Ctrl-Q`: fold-unfold
- `Ctrl-Space`: autocomplete
- `Cmd-Left`: goLineStartSmart
- `Shift-Tab`: indentLess
- `Shift-Ctrl-K`: deleteLine
- `Alt-Q`: wrapLines
- `Ctrl-Left`: goSubwordLeft
- `Ctrl-Right`: goSubwordRight
- `Ctrl-Alt-Up`: scrollLineUp
- `Ctrl-Alt-Down`: scrollLineDown
- `Cmd-L`: selectLine
- `Shift-Cmd-L`: splitSelectionByLine
- `Esc`: singleSelectionTop
- `Cmd-Enter`: insertLineAfter
- `Shift-Cmd-Enter`: insertLineBefore
- `Cmd-D`: selectNextOccurrence
- `Shift-Cmd-Space`: selectScope
- `Shift-Cmd-M`: selectBetweenBrackets
- `Cmd-M`: goToBracket
- `Cmd-Ctrl-Up`: swapLineUp
- `Cmd-Ctrl-Down`: swapLineDown
- `Cmd-/`: toggleCommentIndented
- `Cmd-J`: joinLines
- `Shift-Cmd-D`: duplicateLine
- `F5`: sortLines
- `Shift-F5`: reverseSortLines
- `Cmd-F5`: sortLinesInsensitive
- `Shift-Cmd-F5`: reverseSortLinesInsensitive
- `F2`: nextBookmark
- `Shift-F2`: prevBookmark
- `Cmd-F2`: toggleBookmark
- `Shift-Cmd-F2`: clearBookmarks
- `Alt-F2`: selectBookmarks
- `Backspace`: smartBackspace
- `Cmd-K Cmd-D`: skipAndSelectNextOccurrence
- `Cmd-K Cmd-K`: delLineRight
- `Cmd-K Cmd-U`: upcaseAtCursor
- `Cmd-K Cmd-L`: downcaseAtCursor
- `Cmd-K Cmd-Space`: setSublimeMark
- `Cmd-K Cmd-A`: selectToSublimeMark
- `Cmd-K Cmd-W`: deleteToSublimeMark
- `Cmd-K Cmd-X`: swapWithSublimeMark
- `Cmd-K Cmd-Y`: sublimeYank
- `Cmd-K Cmd-C`: showInCenter
- `Cmd-K Cmd-G`: clearBookmarks
- `Cmd-K Cmd-Backspace`: delLineLeft
- `Cmd-K Cmd-1`: foldAll
- `Cmd-K Cmd-0`: unfoldAll
- `Cmd-K Cmd-J`: unfoldAll
- `Ctrl-Shift-Up`: addCursorToPrevLine
- `Ctrl-Shift-Down`: addCursorToNextLine
- `Cmd-F3`: findUnder
- `Shift-Cmd-F3`: findUnderPrevious
- `Alt-F3`: findAllUnder
- `Shift-Cmd-[`: fold
- `Shift-Cmd-]`: unfold
- `Cmd-I`: findIncremental
- `Shift-Cmd-I`: findIncrementalReverse
- `Cmd-H`: replace
- `F3`: findNext
- `Shift-F3`: findPrev

### Windows

- `Shift-Tab`: indentLess
- `Shift-Ctrl-K`: deleteLine
- `Alt-Q`: wrapLines
- `Ctrl-T`: transposeChars
- `Alt-Left`: goSubwordLeft
- `Alt-Right`: goSubwordRight
- `Ctrl-Up`: scrollLineUp
- `Ctrl-Down`: scrollLineDown
- `Ctrl-L`: selectLine
- `Shift-Ctrl-L`: splitSelectionByLine
- `Esc`: singleSelectionTop
- `Ctrl-Enter`: insertLineAfter
- `Shift-Ctrl-Enter`: insertLineBefore
- `Ctrl-D`: selectNextOccurrence
- `Shift-Ctrl-Space`: selectScope
- `Shift-Ctrl-M`: selectBetweenBrackets
- `Ctrl-M`: goToBracket
- `Shift-Ctrl-Up`: swapLineUp
- `Shift-Ctrl-Down`: swapLineDown
- `Ctrl-/`: toggleCommentIndented
- `Ctrl-J`: joinLines
- `Shift-Ctrl-D`: duplicateLine
- `F9`: sortLines
- `Shift-F9`: reverseSortLines
- `Ctrl-F9`: sortLinesInsensitive
- `Shift-Ctrl-F9`: reverseSortLinesInsensitive
- `F2`: nextBookmark
- `Shift-F2`: prevBookmark
- `Ctrl-F2`: toggleBookmark
- `Shift-Ctrl-F2`: clearBookmarks
- `Alt-F2`: selectBookmarks
- `Backspace`: smartBackspace
- `Ctrl-K Ctrl-D`: skipAndSelectNextOccurrence
- `Ctrl-K Ctrl-K`: delLineRight
- `Ctrl-K Ctrl-U`: upcaseAtCursor
- `Ctrl-K Ctrl-L`: downcaseAtCursor
- `Ctrl-K Ctrl-Space`: setSublimeMark
- `Ctrl-K Ctrl-A`: selectToSublimeMark
- `Ctrl-K Ctrl-W`: deleteToSublimeMark
- `Ctrl-K Ctrl-X`: swapWithSublimeMark
- `Ctrl-K Ctrl-Y`: sublimeYank
- `Ctrl-K Ctrl-C`: showInCenter
- `Ctrl-K Ctrl-G`: clearBookmarks
- `Ctrl-K Ctrl-Backspace`: delLineLeft
- `Ctrl-K Ctrl-1`: foldAll
- `Ctrl-K Ctrl-0`: unfoldAll
- `Ctrl-K Ctrl-J`: unfoldAll
- `Ctrl-Alt-Up`: addCursorToPrevLine
- `Ctrl-Alt-Down`: addCursorToNextLine
- `Ctrl-F3`: findUnder
- `Shift-Ctrl-F3`: findUnderPrevious
- `Alt-F3`: findAllUnder
- `Shift-Ctrl-[`: fold
- `Shift-Ctrl-]`: unfold
- `Ctrl-I`: findIncremental
- `Shift-Ctrl-I`: findIncrementalReverse
- `Ctrl-H`: replace
- `F3`: findNext
- `Shift-F3`: findPrev

## Tools

These are the tools we are using on our platform.

- [Bandit](https://github.com/PyCQA/bandit): Security Analysis of Python code
- [Checkov](https://www.checkov.io/): Terraform and Docker
- [Cppcheck](http://cppcheck.sourceforge.net/): C/C++ analysis
- [Dartanalyzer](https://dart.dev/tools/dartanalyzer): DART analysis
- [Detect-Secrets](https://github.com/Yelp/detect-secrets): Secrets detection
- [Detekt](https://github.com/detekt/detekt): Kotlin analysis
- [ESLint](https://eslint.org/): JavaScript and TypeScript
- [Gosec](https://github.com/securego/gosec): Go analysis focused on security
- [JSCPD](https://github.com/kucherenko/jscpd): duplicates analysis
- [Lizard](https://github.com/terryyin/lizard): complexity and length metrics
- [PHP Mess Detector](https://phpmd.org/): PHP Analysis
- [PMD](https://pmd.github.io/): Java and APEX
- [Pylint](https://www.pylint.org/): Python Analysis
- [Reek](https://github.com/troessner/reek): Ruby Analysis
- [Revive](https://revive.run/): Go analysis
- [Scalastyle](http://www.scalastyle.org/): Scala Analysis
- [Staticcheck](https://staticcheck.io/): Go analysis
- [Shellcheck](https://www.shellcheck.net/): bash/sh Analysis
- [Yamllint](https://github.com/adrienverge/yamllint): YAML analysis
