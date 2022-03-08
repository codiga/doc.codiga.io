---
id: integration-chrome
title: Chrome Extension
description: Check your code on GitHub or Python Notebooks without any additional tool. Install in one click. Free 14 days trial.
tags:
  - bitbucket
  - code reviews
  - code analysis
keywords:
  [
    chrome,
    code analysis,
    code reviews,
    static code analysis,
    javascript,
    typescript,
    python,
    python notebooks,
    jupyter notebook,
    C,
    C++,
  ]
---

## Introduction

The Chrome extension allows you to analyzes code directly in your browser.
It currently works on GitHub (when viewing the code and in pull request)
and in Python notebooks.

It is available on the [Chrome Web Store](https://chrome.google.com/webstore/detail/codiga/dbkhkhonmelajjempmoadocgneoadjge).

The Chrome extension analyzes all the languages supported by our analysis engine
(see the [FAQ](/docs/faq#what-languages-are-supported) for an extensive list).

## GitHub Support

The Chrome extension surfaces any issue in the code you see on GitHub, as shown below.

![GitHub code annotation](/img/chrome-extension/github.png)

The Chrome extension also analyzes pull requests and surfaces all issues in the pull requests.
The pull request analysis needs you to configure the extension and add your GitHub personal access token
to the extension. Make sure you pin the extension in Chrome and click on the icon to add your personal
access token. You can get your personal access token using [this page](https://github.com/settings/tokens).

![GitHub code annotation](/img/chrome-extension/github-configure.gif)

## Python notebook

The Chrome extension works on Jupyter notebooks and annotates code in Python.
As you write code, the extension is annotating your code directly in
your browser.

![Jupyter annotation](/img/chrome-extension/jupyter.gif)

## Data Privacy

Our platform does not keep your code and does not use it in any way (even for statistical use). Once the API analyzes the code,
it is cleaned and removed from our servers. When using the pull request analysis function on private repositories, the extension requests
that the user provides its API token. This token is stored in the local storage in the browser and never sent to our servers. You can check
the code of our extension to check that claim.

You can read more about our [terms of services](https://codiga.io/terms-of-service/) and data [privacy](https://codiga.io/privacy-policy/).

## Code Availability

As all our extensions, the code of our Chrome Extension is [available on GitHub](https://github.com/codiga/chrome-extension).
You can check the code and inspect how our application works.

## Reporting a bug

If you find a bug, please report it in our [issue tracker](https://github.com/codiga/chrome-extension/issues).
You can also join our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ) if you want to directly chat with us.

## More information

- [Chrome Extension listing on the Chrome Store](https://chrome.google.com/webstore/detail/codiga/dbkhkhonmelajjempmoadocgneoadjge)
- [Terms of services](https://codiga.io/terms-of-service/)
- [Privacy](https://codiga.io/privacy-policy/)
- [Issue tracker](https://github.com/codiga/chrome-extension/issues)
- [GitHub Repository](https://github.com/codiga/chrome-extension)
