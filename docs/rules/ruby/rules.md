---
id: rules-ruby
title: Ruby rules
description: Code Analysis rules of Codiga for Ruby detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - Ruby
---

| Rule                                                                                                                 | Category       | Severity | Description                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------- | -------- | ------------------------------------------------------------------------------------ |
| [Attribute](https://github.com/troessner/reek/blob/v5.4.0/docs/Attribute.md)                                         | Design         | 3        | Detect writable attributes                                                           |
| [BooleanParameter](https://github.com/troessner/reek/blob/v5.4.0/docs/Boolean-Parameter.md)                          | Error Prone    | 3        | Detect boolean parameters (instead, the boolean should be used to call the function) |
| [ClassVariable](https://github.com/troessner/reek/blob/v5.4.0/docs/Class-Variable.md)                                | Error Prone    | 3        | Do not use class variables                                                           |
| [ControlParameter](https://github.com/troessner/reek/blob/v5.4.0/docs/Control-Parameter.md)                          | Code Style     | 4        | Control Couple                                                                       |
| [DataClump](https://github.com/troessner/reek/blob/v5.4.0/docs/Data-Clump.md)                                        | Design         | 2        | Data Clump                                                                           |
| [DuplicateMethodCall](https://github.com/troessner/reek/blob/v5.4.0/docs/Duplicate-Method-Call.md)                   | Best Practices | 2        | Duplicated method call                                                               |
| [FeatureEnvy](https://github.com/troessner/reek/blob/v5.4.0/docs/Feature-Envy.md)                                    | Design         | 3        | Use of a data from another class too much (data may be moved to another class)       |
| [InstanceVariableAssumption](https://github.com/troessner/reek/blob/v5.4.0/docs/Instance-Variable-Assumption.md)     | Design         | 3        | Assume too much on class content                                                     |
| [IrresponsibleModule](https://github.com/troessner/reek/blob/v5.4.0/docs/Irresponsible-Module.md)                    | Design         | 2        | No descriptive comment                                                               |
| [LongParameterList](https://github.com/troessner/reek/blob/v5.4.0/docs/Long-Parameter-List.md)                       | Best Practices | 3        | Too many parameters                                                                  |
| [LongYieldList](https://github.com/troessner/reek/blob/v6.0.1/docs/Long-Yield-List.md)                               | Unknonwn       | 4        | Yields too many parameters                                                           |
| [ManualDispatch](https://github.com/troessner/reek/blob/v5.4.0/docs/Manual-Dispatch.md)                              | Design         | 2        | manually dispatches method call                                                      |
| [MissingSafeMethod](https://github.com/troessner/reek/blob/v5.4.0/docs/Missing-Safe-Method.md)                       | Best Practices | 2        | has missing safe method 'populate_question_options!'                                 |
| [ModuleInitialize](https://github.com/troessner/reek/blob/v5.5.0/docs/Module-Initialize.md)                          | Unknonwn       | 4        | has initialize method                                                                |
| [NestedIterators](https://github.com/troessner/reek/blob/v5.4.0/docs/Nested-Iterators.md)                            | Error Prone    | 3        | contains iterators nested 4 deep                                                     |
| [NilCheck](https://github.com/troessner/reek/blob/v5.4.0/docs/Nil-Check.md)                                          | Design         | 2        | Detect nil check                                                                     |
| [RepeatedConditional](https://github.com/troessner/reek/blob/v5.4.0/docs/Repeated-Conditional.md)                    | Design         | 3        | Repeated conditional                                                                 |
| [SubclassedFromCoreClass](https://github.com/troessner/reek/blob/v5.4.0/docs/Subclassed-From-Core-Class.md)          | Design         | 3        | Inherit from Core Class                                                              |
| [TooManyConstants](https://github.com/troessner/reek/blob/v5.4.0/docs/Too-Many-Constants.md)                         | Code Style     | 4        | Too many constants                                                                   |
| [TooManyInstanceVariables](https://github.com/troessner/reek/blob/v5.4.0/docs/Too-Many-Instance-Variables.md)        | Error Prone    | 4        | Too many instance variables                                                          |
| [TooManyMethods](https://github.com/troessner/reek/blob/v5.4.0/docs/Too-Many-Methods.md)                             | Code Style     | 4        | Too many methods                                                                     |
| [TooManyStatements](https://github.com/troessner/reek/blob/v5.4.0/docs/Too-Many-Statements.md)                       | Error Prone    | 4        | Too many statements                                                                  |
| [UncommunicativeMethodName](https://github.com/troessner/reek/blob/v5.4.0/docs/Uncommunicative-Method-Name.md)       | Error Prone    | 3        | has the name 'valid_payment_2'                                                       |
| [UncommunicativeModuleName](https://github.com/troessner/reek/blob/v5.4.0/docs/Uncommunicative-Module-Name.md)       | Code Style     | 4        | Method name not descriptive                                                          |
| [UncommunicativeParameterName](https://github.com/troessner/reek/blob/v5.4.0/docs/Uncommunicative-Parameter-Name.md) | Error Prone    | 3        | Paramter not descriptive                                                             |
| [UncommunicativeVariableName](https://github.com/troessner/reek/blob/v5.4.0/docs/Uncommunicative-Variable-Name.md)   | Error Prone    | 3        | Variable name not descriptive                                                        |
| [UnusedParameters](https://github.com/troessner/reek/blob/v5.4.0/docs/Unused-Parameters.md)                          | Error Prone    | 3        | Unused parameter                                                                     |
| [UtilityFunction](https://github.com/troessner/reek/blob/v5.4.0/docs/Utility-Function.md)                            | Design         | 3        | Data does not depend on instance state                                               |
