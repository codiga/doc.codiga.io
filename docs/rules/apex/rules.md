---
id: rules-apex
title: Apex rules
description: Code Analysis rules of Codiga for Apex detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - Apex
---

| Rule                                                                                                                                        | Category       | Severity | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| [ApexCRUDViolation](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_security.html#apexcrudviolation)                                        | Security       | 3        | Validate CRUD permission before SOQL/DML operation                                                          |
| [ApexDoc](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_documentation.html#apexdoc)                                                       | Documentation  | 3        | Unexpected doc                                                                                              |
| [ApexInsecureEndpoint](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_security.html#apexinsecureendpoint)                                  | Security       | 3        | Apex callouts should use encrypted communication channels                                                   |
| [ApexSharingViolations](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_security.html#apexsharingviolations)                                | Security       | 3        | Apex classes should declare a sharing model if DML or SOQL is used                                          |
| [ApexSOQLInjection](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_security.html#apexsoqlinjection)                                        | Security       | 3        | Apex classes should escape variables merged in DML query                                                    |
| [ApexSuggestUsingNamedCred](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_security.html#apexsuggestusingnamedcred)                        | Security       | 3        | Consider using named credentials for authenticated callouts                                                 |
| [ApexUnitTestClassShouldHaveAsserts](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_bestpractices.html#apexunittestclassshouldhaveasserts) | Best Practices | 3        | Apex unit test classes should have at least one System.assert() or assertEquals() or AssertNotEquals() call |
| [AvoidDeeplyNestedIfStmts](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#avoiddeeplynestedifstmts)                            | Design         | 3        | Deeply nested if..else statements are hard to read                                                          |
| [AvoidGlobalModifier](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_bestpractices.html#avoidglobalmodifier)                               | Best Practices | 3        | Avoid using global modifier                                                                                 |
| [AvoidHardcodingId](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_errorprone.html#avoidhardcodingid)                                      | Error Prone    | 3        | Avoid hardcoding IDs                                                                                        |
| [AvoidLogicInTrigger](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_bestpractices.html#avoidlogicintrigger)                               | Best Practices | 3        | Avoid logic in triggers                                                                                     |
| [ClassNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#classnamingconventions)                             | Code Style     | 3        | Class names should begin with an uppercase character                                                        |
| [CyclomaticComplexity](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#cyclomaticcomplexity)                                    | Design         | 3        | Cyclomatic complexity too high                                                                              |
| [DebugsShouldUseLoggingLevel](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_bestpractices.html#debugsshoulduselogginglevel)               | Best Practices | 3        | Calls to System.debug should specify a logging level.                                                       |
| [EmptyCatchBlock](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_errorprone.html#emptycatchblock)                                          | Error Prone    | 3        | Avoid empty catch blocks                                                                                    |
| [EmptyIfStmt](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_errorprone.html#emptyifstmt)                                                  | Error Prone    | 3        | Avoid empty if statements                                                                                   |
| [EmptyStatementBlock](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_errorprone.html#emptystatementblock)                                  | Error Prone    | 3        | Avoid empty block statements.                                                                               |
| [ExcessiveClassLength](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#excessiveclasslength)                                    | Design         | 3        | Avoid really long classes (lines of code)                                                                   |
| [ExcessiveParameterList](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#excessiveparameterlist)                                | Design         | 3        | Avoid long parameter lists                                                                                  |
| [ExcessivePublicCount](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#excessivepubliccount)                                    | Design         | 3        | This class has too many public methods and attributes                                                       |
| [FieldNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#fieldnamingconventions)                             | Code Style     | 3        | Check name conventions                                                                                      |
| [FormalParameterNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#formalparameternamingconventions)         | Code Style     | 3        | Check name conventions for formal parameters                                                                |
| [IfElseStmtsMustUseBraces](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#ifelsestmtsmustusebraces)                         | Code Style     | 3        | Avoid using if...else statements without curly braces                                                       |
| [IfStmtsMustUseBraces](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#ifstmtsmustusebraces)                                 | Code Style     | 3        | Avoid using if statements without curly braces                                                              |
| [LocalVariableNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#localvariablenamingconventions)             | Code Style     | 3        | Check local variable names conventions                                                                      |
| [MethodNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#methodnamingconventions)                           | Code Style     | 3        | Method name does not begin with a lower case character.                                                     |
| [NcssMethodCount](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#ncssmethodcount)                                              | Design         | 3        | Too many lines of code in a method                                                                          |
| [OneDeclarationPerLine](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#onedeclarationperline)                               | Code Style     | 3        | Use one statement for each line                                                                             |
| [OperationWithLimitsInLoop](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_performance.html#operationwithlimitsinloop)                     | Performance    | 3        | Avoid operations in loops that may hit governor limits                                                      |
| [PropertyNamingConventions](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_codestyle.html#propertynamingconventions)                       | Code Style     | 3        | Ensure property name conventions                                                                            |
| [StdCyclomaticComplexity](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#stdcyclomaticcomplexity)                              | Design         | 3        | Check cyclomatic complexity                                                                                 |
| [TooManyFields](https://pmd.github.io/pmd-6.29.0/pmd_rules_apex_design.html#toomanyfields)                                                  | Design         | 3        | Too many fields                                                                                             |
