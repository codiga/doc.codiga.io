---
id: public-profiles
title: Codiga Public Profiles to show your Code Quality
description: Show your code quality metrics for all your public GitHub repositories. Get a badge to show on your GitHub profile.
keywords:
  - code analysis
  - technical debt
  - code complexity
  - cyclomatic complexity
  - code analysis
  - static code analysis
  - function length
  - code length
  - code reviews
  - github
  - github badge
  - github repository
---

Public profiles let you show the world how good your code is! It provides a summary of your Codiga projects and what is your average Codiga score.

## What projects show up on my public profile?

Your public profile contains all your **public** projects that have been connected with the Codiga analyzer tool. Private projects are **NOT** used for the public profile page.

## How to enable your public profile?

In your very own dashboard at Codiga, once you logged in, go to the left panel and click **Public Profile** and review that it is ENABLED

![Enable public profile on your account](/img/public-profile-enable.png)

## How to access your public profile?

To access your Public Profile, use the URL in your user preferences.

The URL looks like this

- `https://app.codiga.io/public/user/<usertype>/<username>`

You can check out this [public profile](https://app.codiga.io/public/user/github/juli1) for example.

Where `usertype` is the type of user (`github`, `gitlab` or `bitbucket`)
and `username` is the identifier of the user on this platform.

The static content is a static HTML version that is great for indexing
with a search engine. The dynamic version is an implementation of the
public profile on our frontend and is less SEO friendly.

## What do all these numbers mean?

![Example of public profile](/img/public-profile.png)

At the **top left**, the profile shows user information such as location,
link to the profile on GitHub/GitLab/Bitbucket.

## How to add your Codiga public profile on your GitHub profile?

GitHub has a [public profile features](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/about-your-profile)
where you can show and highlights details about your career and coding
statistics. Codiga gives the opportunity to surface your code
quality metrics directly on your GitHub profile.

On your `README.md` file, inserts a code snippet like this (replace `<username>` by your **GitHub** username).
Make sure your public profile is enabled on Codiga in your user preferences.

```
<a href="https://app.codiga.io/public/user/github/<username>">
   <img src="https://app.codiga.io/public/badge/user/github/<username>" alt="Codiga badge" />
</a>
```

The result looks like the following picture, the Codiga badge shows
details about your personal coding statistics. It also links to your
personal public profile on Codiga.

![GitHub public profile](/img/public-profile-github-example.png)
