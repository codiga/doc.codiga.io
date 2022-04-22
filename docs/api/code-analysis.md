---
id: api-code-analysis
title: GraphQL API for Code Analysis
sidebar_label: Code Analysis API
description: Codiga API to access all code analysis metrics using GraphQL. Open API with examples on how to access and use it.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
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

:::info
If you have any question about the API, please join [our discord channel](https://discord.com/invite/5b9bGDtvnc),
we provide direct support on our channel.
:::

:::tip
This section of the documentation is focused on the API for the code analysis. You can learn about how to access
the API and how to authenticate on [this page](/docs/api).
:::

## GraphQL Types

### ApiKey type

The `ApiKey` type is returned after a request to generate an API key. This object is _only_ returned after a mutation
to get a new API key because exposure of the secret key should be limited.

```
type ApiKey {
  accessKey: String!
  secretKey: String!
}

```

### User type

The `User` object type represents all the data used to manage a user. The `accountType` member
distinguish the user type (such as `Github`, `Regular`, `Gitlab`) while the `level` distinguishes
the limits of the account (`Normal`, `Silver`, `Gold`).

You can see all projects owned by the user by using the list `ownedProjects`.

All administrative details of the user (address, company, etc.) are found in the `info` member.

If the user if a `GitHub` account, the `githubInstallationIdentifier` will contain the external GitHub app installation
identifier.

Finally, `linkedAccount` list all accounts from external providers (such as `GitHub`, `Gitlab`) linked to this account.

```
type User {
  username: String!
  accountType: AccountType!
  email: String!
  level: UserLevel!
  creationDate: String!
  ownedProjects: [Project!]!
  numberOfOwnedProjects: Long!
  info: UserInfo
  allowedNumberOfProjects: Long
  remainingAnalysisQuota: Long
  apiKey: String
  githubInstallationIdentifier: Long
  linkedAccounts: [LinkedAccount!]!
}

```

### UserInfo type

The `UserInfo` type represents all administrative data of a user. It is directly attached to the `User` type.

```
type UserInfo {
  firstname: String!
  lastname: String!
  address: String!
  city: String!
  country: String!
  heard_about: String!
  state: String!
  url: String!
  zipcode: String!
}
```

### Group type

The `GroupType` type represent a group. Similar to a user, the `GroupType` represents if this is a
group linked with another service providers (e.g. `GitHub`). Users are associated with groups through
the `members` attribute that list all members of a group.

To get the projects of the group, use the `projects` attribute.

```
type Group {
  id: Long!
  name: String!
  type: GroupType!
  state: GroupState!
  level: UserLevel!
  owner: User
  members: [GroupMembership!]!
  remainingAnalysisQuota: Long
  allowedNumberOfProjects: Long
  projects(
    howmany: Long!
    skip: Long!
  ): [Project!]!
}
```

### Group Membership type

The `GroupMembership` type represents the association between a user and a group. The `level` attribute
indicates the permission given to the user on the group.

```
type GroupMembership {
  groupId: Long!
  level: GroupMembershipLevel!
  userId: Long!
  identifier: String
  accountType: AccountType
}
```

### ExternalRepository type

The `ExternalRepository` type models a repository from a third-party vendor. This is used
to list all the repository a user or a group can access. The third party vendor type is identified
using the `kind` attribute.

```
type ExternalRepository {
  name: String!
  url: String!
  kind: AccountType!
}
```

### Analysis type

The `Analysis` object is the entrypoint to getting analysis results.

First of all, the `status` attribute indicate if an analysis was completed (`Done`) or has any issues (state `Error`).
It gives various indication on the repository revision/branch.

The `violations` attributes let's you get violations for this analysis. You can filter for a particular path
by specifying the `path` attribute when querying the `violations` attribute. You can also filter by category, severity
or languages. Make sure to use pagination mechanisms (attributes `howmany` and `skip`).

The `duplicates` attribute works similarly and expose duplicated code for this analysis. You can also filter by `path`
and need to pass pagination arguments.

The `complexFunctions` atttribute works similarly.

The `techdebt` attribute gives all the information relative to the technical debt: its associated cost,
and the list of files to fix.

The `summary` attributes gives general statistics on the analysis (such as number of violation per a given severity)

The `slocs` attributes indicate the distribution of lines of code for each language.

The `tree` gives the list of files or directory with a given prefix. If you pass the prefix `src`, this attribute will return
the list of all immediate file or directory under `src` (and some violation/duplicate information stored in the `AnalysisNode`)
object. The `tree` attribute is how we surface analysis results across directories.

The `fileContent` retrieves the text content of a file. The content will be given only if the project is connected
to a repository hosted on a third-party service.

```
type Analysis {
  id: Long!
  status: AnalysisResultStatus!
  startTimestamp: Long!
  runningTimeSeconds: Long!
  revision: String
  repoUrl: String
  repoUsername: String
  repoRevision: String
  repoBranch: String
  violations(
    status: [AnalysisResultStatus!]
    languages: [LanguageEnumeration!]
    filename: String
    path: String
    howmany: Long!
    category: [ViolationCategory!]
    severity: [Long!]
    skip: Long!
  ): [Violation!]!
  duplicates(
    howmany: Long!
    skip: Long!
    filename: String
    prefix: String
  ): [Duplicate!]!
  complexFunctions(
    howmany: Long!
    skip: Long!
    filename: String
    path: String
    orderBy: ComplexFunctionSearchBy
  ): [ComplexFunction!]!
  techdebt: TechnicalDebtType!
  summary: AnalysisResultSummary!
  errors: [AnalysisErrorType!]!
  stats: [AnalysisResultStatType!]!
  slocs: Long!
  tree(prefix: String): [AnalysisNode!]!
  fileContent(path: String!): [String!]!
}
```

### Violation type

The `ViolationType` object reports all the necessary elements about a violation: its location
(complete path in the `filename` and `line` attributes, `description`, `language` and so on).

The `codeHash` provides a hash of the line of code that contains the violation.

The `uniqueIdentifier` provides a single identifier for this violation and associated code. It combines
the `codeHash` and the `rule`.

```
type Violation {
  filename: String!
  line: Long!
  description: String!
  severity: Long!
  category: ViolationCategory!
  lineCount: Long!
  language: LanguageEnumeration
  tool: String
  rule: String
  codeHash: String
  uniqueIdentifier: String!

}
```

### AnalysisCompare type

The `AnalysisCompare` objects represents a comparison between two analyses (one source and one target).
All elements (branch, revision is provided for the source and the target).

The result of the source analysis is available under the `sourceAnalysis` attribute. The result of the target
analysis is available under the `targetAnalysis` attribute. You can then freely query the results of both
the source and target at the same time.

```
type AnalysisCompare {
  id: Long!
  status: AnalysisResultStatus!
  completion_time: Long!
  tags: String
  sourceKind: ScmKind!
  sourceUrl: String!
  sourceUsername: String
  sourcePassword: String
  sourceBranch: String
  sourceRevision: String
  targetKind: ScmKind!
  targetUrl: String!
  targetUsername: String
  targetPassword: String
  targetBranch: String
  targetRevision: String
  sourceAnalysis: Analysis
  targetAnalysis: Analysis
}
```

### AnalysisDiff type

The `AnalysisDiff` type represents the difference in terms of violations, duplicates, complex and long
functions. The engine computes automatically violations/duplicates/complex/long functions being added or removed
and surface them in this object.

```
type AnalysisDiff {
  addedViolations: [Violation!]!
  removedViolations: [Violation!]!
  addedDuplicates: [FlattenedDuplicate!]!
  removedDuplicates: [FlattenedDuplicate!]!
  addedComplexFunctions: [ComplexFunction!]!
  removedComplexFunctions: [ComplexFunction!]!
  addedLongFunctions: [ComplexFunction!]!
  removedLongFunctions: [ComplexFunction!]!
}
```

### AnalysisNode type

An `AnalysisNode` provides the number of violations, duplicates, complex and long functions
for one node of the file directory. The `name` attribute if the name of the file/directory while the `fullPath`
gives the full path in the source tree. If the node is a file `isFile` is true. Otherwise, `isFile` is false.

```
type AnalysisNode {
  name: String!
  isFile: Boolean!
  fullPath: String!
  violations: Long!
  duplicates: Long!
  violationsPerLanguage: [AnalysisNodeViolationsPerLanguage!]!
  complexFunctions: Long!
  longFunctions: Long!
  totalFunctions: Long!
}
```

### AnalysisResultStatType type

The `AnalysisResultStatType` provides the number of lines for a given language (for example, 150 lines of code
of Java). It is associated with the `Analysis` object to get statistics of source code usage.

```
type AnalysisResultStatType {
  language: String!
  lines: Long!
}
```

### AnalysisNodeViolationsPerLanguage type

The `AnalysisNodeViolationsPerLanguage` provides the number of violations for a given language.

```
type AnalysisNodeViolationsPerLanguage {
  language: LanguageEnumeration!
  violations: Long!
}
```

### TechnicalDebtType type

The `TechnicalDebtType` stores all the information related to the technical debt costs.

The `score` represents the Code Quality Score and `grade` the associated grade (from A to E).

The attributes starting with `fixing` indicates the amount of time of money to fix issues.

The attributes of type `CodeDensity` reports the elements with the most issues in a given category (violation, duplicates, complex or long functions).

```

type TechnicalDebtType {
  score: Long
  grade: ProjectStatus
  fixingViolationsHours: Float!
  fixingDuplicatesHours: Float!
  fixingComplexityHours: Float!
  fixingReadabilityHours: Float!
  fixingViolationsCost: Float!
  fixingDuplicatesCost: Float!
  fixingComplexityCost: Float!
  fixingReadabilityCost: Float!
  violationsDensity: [CodeDensity!]!
  duplicatesDensity: [CodeDensity!]!
  complexFunctions: [CodeDensity!]!
  longFunctions: [CodeDensity!]!
}

```

### AssistantCookbookType

```
type AssistantCookbook {
  # identifier
  id: Long!

  # name
  name: String!

  # description
  description: String!

  # is public
  isPublic: Boolean!

  # creation timestamp
  creationTimestampMs: Long!

  # creation timestamp
  owner: User

  # list of recipes for this cookbook
  recipes: [AssistantRecipe!]!
}
```

### AssistantRecipeType

```
type AssistantRecipe {
  # identifier
  id: Long!

  # name
  name: String!

  # description
  description: String!

  # is public
  isPublic: Boolean!

  # filename patterns
  filenamePatterns: [String!]!

  # keywords
  keywords: [String!]!

  # filename patterns
  tags: [String!]!

  # content
  code: String!

  # imports to add when adding the recipe
  imports: [String!]!

  # language of the recipe
  language: LanguageEnumeration!

  # creation timestamp
  creationTimestampMs: Long!

  # creation timestamp
  owner: User

  # dependencies
  dependencyConstraints: [AssistantRecipeDependencyConstraint!]!

  # list of comments
  comments(
    # how many records we want (required)
    howmany: Long!

    # number of records to skip (required)
    skip: Long!
  ): [AssistantRecipeComment!]!
}
```

### CodeReview type

- The `CodeReview` type model the results for a given code review.
- The `id` field uniquely identifier the code review on Codiga.
- The `scmKind` field indicates what kind of repository is used for this code review.
- The `creationTimestampMs` is the epoch of the code review.
- The `submitter` is the name of the user that submitted the code review.
- The `revision` is the revision of the branch being review.
- The `url` is a link to the pull/merge request on GitHub, Gitlab or Bitbucket.
- The `annotations` represents the list of all violations added for this code review.
- The `annotationsCount` indicates how many annotations were added.
- The `modifications` field indicates all modifications done in this code reviews
- The `modificationsCount` field indicates how many modifications were made

```
type CodeReview {
  # identifier of the code review
  id: Long!

  # name of the repository
  scmKind: ScmKind!

  # status of the review
  status: AnalysisResultStatus!

  # when was it created (in ms)
  creationTimestampMs: Long!

  # submitter name
  submitter: String

  # source branch of the review
  sourceBranch: String

  # target branch of the review
  targetBranch: String

  # revision being reviewed
  revision: String

  # url to the code review on code platform
  url: String

  # list of annotations added on this code review
  annotations: [CodeReviewAnnotation!]!

  # count of annotations for this review
  annotationsCount: Int!

  # list of modifications for this code review
  modifications: [CodeReviewModification!]!

  # count of modifications for this review
  modificationsCount: Int!
}

```

### CodeReviewAnnotation

Model a code review annotation, which can be a violation, a code duplicate,
a long function or a complex function.

```
# Annotation (violation, duplicate, long function) that is detected during a code review
type CodeReviewAnnotation {
  # identifier of the code review
  codeReviewIdentifier: Long!

  # kind of repository (github, gitlab, etc.)
  kind: ScmKind!

  # Kind of annotation (violation, duplicated, complex or long function)
  annotationKind: CodeReviewAnnotationKind!

  # file reported
  filename: String!

  # line reported
  line: Long!

  # rules being used by the violation (if any)
  rule: String

  # tool used to find the violation (if any)
  tool: String

  # severity of the violation (if kind is violation)
  severity: Long

  # category of the violation (if kind is violation)
  category: ViolationCategory

  # description of the violation (if kind is violation)
  description: String
}
```

### CodeReviewModification

```
# Modification on a file that is detected during a code review
type CodeReviewModification {
  # identifier of the code review
  codeReviewIdentifier: Long!

  # kind of repository (github, gitlab, etc.)
  kind: ScmKind!

  # file reported
  filename: String!

  # how many lines were added
  linesAdded: Long!

  # how many lines were removed
  linesRemoved: Long!

  # was the file added
  added: Boolean!

  # was the file removed)
  removed: Boolean!
}
```

### CodeDensity type

The `CodeDensity` type is used in the `TechnicalDebtType` type to show the density of violations, duplicated lines,
complex or long functions. The `filename` and `function` are optional. For example, when showing the density
of violations, it is done by file and we ignore the `function` attribute.

```
type CodeDensity {
  filename: String
  function: String
  metric: Float!
}
```

### AnalysisResultSummary type

The `AnalysisResultSummary` is what is returned with the `summary` attribute of the `Analysis` type.
This type groups all statistics for use for one analysis, either total number (such as `violations` or `violationsDesign`)
or value per sloc/lines of code (such as `violationsSecurityPerSloc`).

```
type AnalysisResultSummary {
  duplicated_lines: Long!
  duplicated_linesPerSloc: Float
  duplicates: Long!
  duplicatesPerSloc: Float
  violations: Long!
  violationsDocumentation: Long!
  violationsPerformance: Long!
  violationsDeployment: Long!
  violationsDesign: Long!
  violationsSecurity: Long!
  violationsSafety: Long!
  violationsBest_practice: Long!
  violationsCode_style: Long!
  violationsError_prone: Long!
  violationsUnknown: Long!
  violationsDocumentationPerSloc: Float
  violationsPerformancePerSloc: Float
  violationsDeploymentPerSloc: Float
  violationsDesignPerSloc: Float
  violationsSecurityPerSloc: Float
  violationsSafetyPerSloc: Float
  violationsBest_practicePerSloc: Float
  violationsCode_stylePerSloc: Float
  violationsError_pronePerSloc: Float
  violationsUnknownPerSloc: Float
  violationsSeverity1: Long!
  violationsSeverity2: Long!
  violationsSeverity3: Long!
  violationsSeverity4: Long!
  violationsSeverity1PerSloc: Float
  violationsSeverity2PerSloc: Float
  violationsSeverity3PerSloc: Float
  violationsSeverity4PerSloc: Float
  complexFunctionsRate: Float
  longFunctionsRate: Float
  longFunctions: Long!
  complexFunctions: Long!
  totalFunctions: Long!
}
```

## ComplexFunction type

The `ComplexFunction` type gives all the details of a complex function: its cyclomatic complexity
(the `complexity` attribute), filename, name of the function (`functionName` attribute), where does it start
(`lineStart` attribute) and ends (`lineEnd` attribute) in the file, the number of parameters (`nbParameters` attribute).

```
type ComplexFunction {
  complexity: Long!
  filename: String!
  functionName: String!
  length: Long!
  lineStart: Long!
  lineEnd: Long!
  nbParameters: Long!
  language: LanguageEnumeration!
}
```

### Duplicate and DuplicateOccurrence type

The `Duplicate` type represents a block of duplicate code. The `Duplicate` object itself
represent the concept of duplicated code. It indicates the length of the duplicated code (`lineCount` attribute)
and the code itself. Then, the `occurrences` attribute list all the occurrences of this duplicates (make sure
to pass the `howmany` and `skip` attributes). An occurrence is shown using the `DuplicateOccurrence` object type.
This type contains the file containing the occurrence (attribute `filename`) as well as the line where the occurrence
occurs (attribute `line`).

```
type Duplicate {
  id: Long!
  lineCount: Long!
  code: String!
  occurrences(
    howmany: Long
    filename: String
    skip: Long
  ): [DuplicateOccurrence!]!
}

type DuplicateOccurrence {
  filename: String!
  line: Long!
}
```

### ViolationIgnore type

The `ViolationIgnore` type represents a violation that is ignored for a project. If the violation is ignored only
for a file, the attribute `filename` is defined. If the violation is ignored for the whole project, the
`filename` attribute is not defined.

```
type ViolationIgnore {
  filename: String
  description: String
  language: LanguageEnumeration
  rule: String!
  tool: String!
}
```

### FileAnalysis type

This is the type that represents the `FileAnalysis` type that represents
a single file to analyze.

```
# Analysis for a single file
type FileAnalysis {
  # identifier of the analysis
  id: Long!

  # status of the analysis
  status: AnalysisResultStatus!

  # filename
  filename: String!

  # language
  language: LanguageEnumeration!

  # running time for the analysis
  runningTimeSeconds: Long!

  # when the request was issued
  timestamp: Long!

  # code sent by the user
  code: String!

  # violation found
  violations: [FileAnalysisViolation!]!
}
```

### FileAnalysisViolation type

This represents the violations surfaced for `FileAnalysis` objects.
This violation object does not contain the `codeHash` attribute.
Other than that, the object has similar fields than the `Violation` object.

```
# violation for a one-off analysis
type FileAnalysisViolation {
  # identifier of the analysis
  id: Long!

  # language
  language: LanguageEnumeration!

  # description
  description: String!

  # severity of the error
  severity: Long!

  # category of the error
  category: ViolationCategory!

  # line where the error appears
  line: Long!

  # number of lines with the error
  lineCount: Long!

  # tool used to detect the issue
  tool: String!

  # name of the rule
  rule: String!

  # URL for recommendation
  ruleUrl: String
}
```

## Enumeration

GraphQL enforces type checking, which means you can enumerate potential values of use. Below are the list
of values allowed for enumeration.

### AnalysisTrend enumeration

```java
enum AnalysisTrend {
  Unknown
  Worst
  Same
  Better
}

```

### AnalysisResultStatus enumeration

```java
enum AnalysisResultStatus {
  Unknown
  Done
  Error
  Same_Revision
  InProgress
  Scheduled
  Started
}
```

### GroupState enumeration

```java
enum GroupState {
  Deleting
  Active
  Disabled
  Created
}
```

### GroupType enumeration

```java
enum GroupType {
  Bitbucket
  Gitlab
  Github
  Regular
}
```

### LinkedAccountKind enumeration

```java
enum LinkedAccountKind {
  Bitbucket
  Gitlab
  Github
}
```

### LanguageEnumeration enumeration

```java
enum LanguageEnumeration {
  Unknown
  Typescript
  Shell
  Scala
  Rust
  Ruby
  Php
  Python
  Javascript
  Java
  Go
  Cpp
  C
}
```

#### AnalysisErrorType enumeration

```java
enum AnalysisErrorType {
  Unknown
  TooManyLines
  ShellError
  ScalaError
  SecurityError
  PythonError
  PhpError
  JavascriptError
  JavaError
  GoError
  DuplicationFindError
  CppError
  AuthenticationError
}
```

#### CodeReviewAnnotationKind

```
enum CodeReviewAnnotationKind {
  LongFunction
  ComplexFunction
  Duplicate
  Violation
}
```

### AccountType enumeration

```java

enum AccountType {
  Bitbucket
  Gitlab
  Github
  Regular
}
```

### Userlevel enumation

```java
enum UserLevel {
  Admin
  Gold
  Silver
  Basic
}
```

### ViolationCategory enumeration

```java

enum ViolationCategory {
  Unknown
  Error_Prone
  Code_Style
  Best_Practice
  Safety
  Security
  Design
  Deployment
  Performance
  Documentation
}
```

## Sample Queries

### User Queries

There are some information about how to query information about your user.

#### Getting basic information

The following request queries the authenticated user username, account type, email, level, creation date and
the number of projects owned.

`{ user{ username accountType email level creationDate numberOfOwnedProjects } }`

Response sample

```
{
  "data": {
    "user": {
      "username": "<REDACTED>",
      "accountType": "Regular",
      "email": "<REDACTED>",
      "level": "Silver ",
      "creationDate": "2019-07-15 05:38:10.0",
      "numberOfOwnedProjects": 29
    }
  }
}

```

#### Getting extended user information

The following query surfaces the firstname, lastname, city, country and state for the authenticated user.

```
{
  user{
    info{
      firstname
      lastname
      city
      country
      state
    }
  }
}
```

Response sample

```
{
  "data": {
    "user": {
      "info": {
        "firstname": "John",
        "lastname": "Doe",
        "city": "San Francisco",
        "country": "USA",
        "state": "CA"
      }
    }
  }
}
```

#### Getting the list of owned projects

The following request list all the projects owned by the authenticated user.

```
{
  user{
    ownedProjects{
      id
      name
    }
  }
}
```

Response sample

```
{
  "data": {
    "user": {
      "ownedProjects": [
        {
          "id": 12,
          "name": "project one"
        },
        {
          "id": 14,
          "name": "project two"
        }
      ]
    }
  }
}
```

### Group Queries

#### List of your groups

Request sample

```
{
  groups(howmany: 100, skip: 0){
    id
    name
    members{
      identifier
      accountType
    }
  }
}
```

Response sample

```
{
  "data": {
    "groups": [
      {
        "id": 93,
        "name": "test2",
        "members": [
          {
            "identifier": "test@codiga.io",
            "accountType": "Regular"
          }
        ]
      },
      {
        "id": 112,
        "name": "test3",
        "members": []
      }
    ]
  }
}
```

#### Get one group by its id

The following requests queries the group with the `id` 93 and show the owner username

```
{
  group(id: 93){
    name
    owner{
      username
    }
  }
}
```

Response sample

```
{
  "data": {
    "group": {
      "name": "test2",
      "owner": {
        "username": "<USERNAME>"
      }
    }
  }
}
```

### Project Queries

#### List of projects

The following query gets the first five projects the authenticated user has access to (by order of project creation).

```
{
  projects(howmany:5, skip: 0){
    id
    name
  }
}
```

Response sample

```
{
  "data": {
    "projects": [
      {
        "id": 12,
        "name": "POK"
      },
      {
        "id": 14,
        "name": "rtems"
      },
      {
        "id": 15,
        "name": "smaccm"
      },
      {
        "id": 16,
        "name": "awesome"
      },
      {
        "id": 17,
        "name": "nodejs"
      }
    ]
  }
}
```

#### Getting one project

The following request query the project with `id` 12. It queries the project name as well
as the code quality score of the last analysis being done.

```
{
  project(id: 12){
    name
    lastAnalysis{
      techdebt{
        score
      }
    }
  }
}
```

Response sample

```
{
  "data": {
    "project": {
      "name": "POK",
      "lastAnalysis": {
        "techdebt": {
          "score": 80
        }
      }
    }
  }
}
```

### Analysis Queries

#### Getting several analyses

The following request queries the project with the `id` 12. It surfaces:

- the project name
- the last two analyses (`howmany` set to 2 and `skip` to 0) that have been completed (status `Done`)

```
{
  project(id: 12){
    name
    analyses(howmany: 2, skip: 0, status: Done){
      id
      startTimestamp
      runningTimeSeconds
    }
  }
}
```

Response sample

```
{
  "data": {
    "project": {
      "name": "POK",
      "analyses": [
        {
          "id": 106183,
          "startTimestamp": 1574212696000,
          "runningTimeSeconds": 50
        },
        {
          "id": 104806,
          "startTimestamp": 1574126180000,
          "runningTimeSeconds": 50
        }
      ]
    }
  }
}
```

#### Getting last analysis of a project

The following request queries project with the `id` 12 and extracts:

- the project name
- the last analysis done with
  - the summary with the total number of violations, duplicated lines, complex functions and long functions
  - the total number of lines of code/slocs
  - the statistics with the number of lines of code per language

```
{
  project(id: 12){
    name
    lastAnalysis{
      summary{
        violations
        duplicated_lines
        complexFunctions
        longFunctions
      }
      slocs
      stats{
        language
        lines
      }
    }
  }
}
```

Response sample

```
{
  "data": {
    "project": {
      "name": "POK",
      "lastAnalysis": {
        "summary": {
          "violations": 743,
          "duplicated_lines": 2510,
          "complexFunctions": 12,
          "longFunctions": 64
        },
        "slocs": 46279,
        "stats": [
          {
            "language": "c",
            "lines": 43460
          },
          {
            "language": "perl",
            "lines": 2630
          },
          {
            "language": "shell",
            "lines": 189
          }
        ]
      }
    }
  }
}
```

### Getting the filename that contains security violations

```
{
  project(id: <project-id>) {
  	lastAnalysis {
    	id

      violations(categories: [Security], howmany:100, skip:0){
        filename
        line
        tool
        language
        description
        category
      }
  	}
  }
}
```

### Query the first ten code reviews of a project

Query the ten first code reviews of a project and get

- all modifications done
- all annotations, either violations, duplicates, long or complex functions

```
{
  project(id: <project-id>) {
  	id
    name
    codeReviews(howmany:10, skip:0){
      id
      scmKind
      creationTimestampMs
      modifications{
        codeReviewIdentifier
        kind
        filename
        linesAdded
        linesRemoved
      }
      modificationsCount
      annotations{
        codeReviewIdentifier
        category
        annotationKind
        tool
        rule
        severity
        category
        description
      }
    }
  }
}
```

### Query a specific code review

Query a specific code review and show

- all modifications done
- all annotations, either violations, duplicates, long or complex functions

```
{
  project(id: <project-id>) {
  	id
    name
    codeReview(id: <code-review-id>){
      id
      scmKind
      creationTimestampMs
      modifications{
        codeReviewIdentifier
        kind
        filename
        linesAdded
        linesRemoved
      }
      modificationsCount

      annotations{
        codeReviewIdentifier
        category
        annotationKind
        tool
        rule
        severity
        category
        description
      }

    }
  }
}
```
