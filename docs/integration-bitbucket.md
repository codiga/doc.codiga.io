---
id: integration-bitbucket
title: Bitbucket Integration
description: Automated Code Reviews and Code Analysis on Bitbucket for 12+ languages. Install in one click. Free 14 days trial.
tags:
  - bitbucket
  - code reviews
  - code analysis
keywords:
  [
    bitbucket,
    code analysis,
    code reviews,
    static code analysis,
    javascript,
    typescript,
    C,
    C++,
  ]
---

The integration with Bitbucket is done through a dedicated
Bitbucket App.

## How to install the App

### From the marketplace

Our application is available on the [Bitbucket Marketplace](https://marketplace.atlassian.com/1222117).

### Using a direct link

You can install the Bitbucket app by directly clicking on the following button.
It will prompt you on what account or group you want to install the app on.

[![Bitbucket link](/img/bitbucket-button.png)](https://bitbucket.org/site/addons/authorize?addon_key=code-inspector&redirect_uri=https://api.codiga.io/bitbucket/app)

Once you install the app, you need

### From your account

#### Step 1: Go to your workspace

From your account, look at the marketplace link on the left menu.

![Marketplace on Bitbucket account](/img/bitbucket1.png)

#### Step 2: Find and Install the Codiga App

In the `Code Quality` section, look for Codiga.Click on `Add`.

![Codiga App on Marketplace](/img/bitbucket2.png)

#### Step 3: Add repositories

When you navigate to your repository, select the `Codiga` menu (old instlallations will see a `Code Inspector` menu).
Select `Add Project to Codiga`.

You can then see metrics directly on Bitbucket or all metrics on our [app](https://app.codiga.io).

![Add repository](/img/bitbucket3.png)

## How to add repositories

Navigate to the repository. Select `Codiga` (or `Code Inspector` depending on how old your installation is) and
add the project, as shown below.

![Add repository](/img/bitbucket3.png)

**Note**: if the project belongs to a group or team in Bitbucket, Codiga will automatically
create a group on Codiga. Each Bitbucket user will have access to the project
on Codiga once logged with their Bitbucket account.

## Limits

The same limits apply for Bitbucket accounts as for regular accounts.
See our [pricing page](https://codiga.io/pricing/) for limits on each account type.

## Features

### All existing features on Codiga

Historical metrics, technical debt analysis, per commit analysis: you can access
all the data as any other account.

### Integration of Codiga metrics within the Bitbucket UI

Codiga metrics are directly integrated within the Bitbucket UI and can be view at two places:

1.  On the main page of the repository, where the code quality score is shown (first picture below)
2.  On a dedicated page where key metrics are shown (second picture below)

This brings the ability to quickly see what are the metrics available when you navigate on Bitbucket.
The main interface of Codiga is available on our [frontend](https://app.codiga.io)
with more details and fine-grained data on code quality and technical debt.

![Metrics overview on project landing](/img/bitbucket-overview.png)

![Dashboard integrated within Bitbucket UI](/img/bitbucket-metrics.png)

### Automated Code Review

Codiga automatically processes Pull Requests on Bitbucket, analyzes code change
and annotates the code according to violations, duplicates, complex and unreadable code.

This functionality is similar to the one offered by our [GitHub application](/docs/integration-github).

The comment in pull requests are being issued with the identity
of the user that installed the Bitbucket App. Unfortunately,
this is due to a [limitation from Bitbucket](https://jira.atlassian.com/browse/BCLOUD-11739). Once this limitation is being removed, we will post comments
under the name of our application.

## Support for user

In order to use Codiga with your Bitbucket account, you need to install our Bitbucket application.
The Codiga application enables features such as integration of Codiga metrics in the
repository view as well as automated code reviews.

## Support for groups

Bitbucket teams are mapped into Codiga groups. In other words,
when you install our Bitbucket application for a team, it creates a group
on Codiga. Any member of the Bitbucket team that logs
using their Bitbucket account on Codiga will be a member of that group
on Codiga.

## Project creation

Bitbucket repositories are mapped into Codiga projects. Codiga projects are created
in two ways:

- Manually from the interface (see above the dedicated section)
- Automatically when a project is created (after the Bitbucket application is installed).

## Upgrading your account

If you hit the limit for the number of repositories or analyses and want to upgrade your account, please contact us
using the integrated support feature of our product or directly using
the [contact form](https://codiga.io/contact-us/) on our landing page. We do not
support automatic billing for Bitbucket accounts at this time.

## Bitbucket Server Support

We do support Bitbucket Server, which allows using Codiga on your dedicated Bitbucket server.
The billing form is different and tailored to customer needs, please [contact us](https://codiga.io/contact-us/)
to get more information from our sales team.

## Unsupported features

- Upgrade: account upgrade to gold or silver are not handled automatically at this time.
- Mercurial repositories: we only support Git repositories at this time.

## Data protection

In a nutshell: Codiga keeps data about your profile (username, email)
and the projects being analyzed. It does not keep any source code on its servers.

All details about data protection are detailed in our [Terms of Service](https://codiga.io/terms-of-service/),
[Security](https://codiga.io/security/) and [Privacy](https://codiga.io/privacy-policy/) policies.

**Note**: if you decide to remove our Bitbucket App from your Bitbucket account,
all user data, projects and metrics are automatically removed from our servers.

## Contact and Support

The Bitbucket app is supported as an official Codiga product. Do not hesitate to
use the support feature within our product or directly [contact us](https://codiga.io/contact-us/).
