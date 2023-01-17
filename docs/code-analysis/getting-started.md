---
id: getting-started
title: Codiga Code Analysis Documentation
description: Code Analysis and Automated Code Reviews for GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
keywords:
  - aws
  - aws build
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

Codiga is the home of the clean, safe and secure code. Codiga helps developers to produce better code
and address technical debt. The platform provides the following functions:

- **Static Code Analysis**: report code violations in your IDE in milliseconds. Codiga works in your CI/CD pipeline and reports errors at every code changes in seconds. Codiga static code analysis works on VS Code, JetBrains, VisualStudio, GitHub, Gitlab and Bitbucket.
- **Secure Code Analysis**: check your code in real-time in your IDE, and at each code change in your CI/CD pipelines. Codiga implements code analysis rules for all major standards and follows software practices such as OWASP10 and CWE/SANS Top 25.
- **Automated Code Reviews**: automatically surface code smells, duplicates or complex functions when sending code for review.
- **Integration with multiple platforms**: Codiga is integrated with [GitHub](/docs/code-analysis/integration/github), [Gitlab](/docs/code-analysis/integration/gitlab), [Bitbucket](/docs/code-analysis/integration/bitbucket), [Slack](/docs/code-analysis/integration/slack), [Generic CI/CD](/docs/code-analysis/integration/generic), [AWS CodeBuild](/docs/code-analysis/integration/aws-codebuild), [CircleCI](/docs/code-analysis/integration/circleci), [GitHub Action](/docs/code-analysis/integration/github-action) and [Git Hooks](/docs/code-analysis/integration/git-hooks).

Codiga is an open platform and you can develop your own tool on top of its analysis engine.
All data is exposed on a GraphQL API that lets you access all analysis data.

<SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
<Card>
<Heading size="md" m={0}>Playground</Heading>
<Text fontSize="sm" m={0} lineHeight="tall" flexGrow={2}>
Codiga provides a playground to experiment our statistic analyzer and write your own rules. Use the playground to test your own rules, experiment by starting from other people rules and let your imagination write the best code analysis rules.
</Text>

  <DocLink isExternal size="sm" variant="primary" href="https://app.codiga.io/hub/playground/">
    Learn More
  </DocLink>
  </Card>
  <Card>
    <Heading size="md" m={0}>Explore the Hub</Heading>
    <Text fontSize="sm" m={0} lineHeight="tall" flexGrow={2}>
    The Codiga Hub hosted hundreds of custom analysis rules you can reuse. Browse rules on the Hub, import them in the playground and create new analysis rules for your team.
    </Text>
    <DocLink isExternal size="sm" variant="primary" href="https://app.codiga.io/hub/rulesets">Learn More</DocLink>
  </Card>
</SimpleGrid>
