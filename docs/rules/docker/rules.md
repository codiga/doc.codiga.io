---
id: rules-docker
title: Docker rules
description: Code Analysis rules of Codiga for Docker detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
  - Container
  - Docker
---

| Rule                                                                                                                     | Category       | Severity | Description                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | -------------- | -------- | ------------------------------------------------------------------------ |
| [CKV_DOCKER_1](https://docs.bridgecrew.io/docs/ensure-port-22-is-not-exposed)                                            | Best Practices | 4        | Ensure port 22 is not exposed                                            |
| [CKV_DOCKER_2](https://docs.bridgecrew.io/docs/ensure-that-healthcheck-instructions-have-been-added-to-container-images) | Best Practices | 4        | Ensure that HEALTHCHECK instructions have been added to container images |
| [CKV_DOCKER_3](https://docs.bridgecrew.io/docs/ensure-that-a-user-for-the-container-has-been-created)                    | Best Practices | 4        | Ensure that a user for the container has been created                    |
| [CKV_DOCKER_4](https://docs.bridgecrew.io/docs/ensure-that-copy-is-used-instead-of-add-in-dockerfiles)                   | Best Practices | 4        | Ensure that COPY is used instead of ADD in Dockerfiles                   |
| [CKV_DOCKER_5](https://docs.bridgecrew.io/docs/ensure-update-instructions-are-not-used-alone-in-the-dockerfile)          | Best Practices | 4        | Ensure update instructions are not use alone in the Dockerfile           |
| CKV_DOCKER_6                                                                                                             | Best Practices | 4        | Ensure that LABEL maintainer is used instead of MAINTAINER (deprecated)  |
| CKV_DOCKER_7                                                                                                             | Best Practices | 4        | Ensure the base image uses a non latest version tag                      |
| CKV_DOCKER_8                                                                                                             | Best Practices | 4        | Ensure the last USER is not root                                         |
