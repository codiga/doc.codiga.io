---
id: rules-php
title: PHP rules
description: Code Analysis rules of Codiga for PHP detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - PHP
---

| Rule                                                                                                          | Category       | Severity | Description                                                                    |
| ------------------------------------------------------------------------------------------------------------- | -------------- | -------- | ------------------------------------------------------------------------------ |
| [BooleanArgumentFlag](http://phpmd.org/rules/cleancode.html#booleanargumentflag)                              | Code Style     | 1        | Check method that have a boolean argument, it's often a bad design decision    |
| [BooleanGetMethodName](http://phpmd.org/rules/naming.html#booleangetmethodname)                               | Design         | 4        | getter methods which returns a boolean should be named 'is...()' or 'has...()' |
| [ConstantNamingConventions](http://phpmd.org/rules/naming.html#constantnamingconventions)                     | Code Style     | 4        | Constants should be defined in uppercase                                       |
| [ConstructorWithNameAsEnclosingClass](http://phpmd.org/rules/naming.html#constructorwithnameasenclosingclass) | Code Style     | 4        | Classes should not have a constructor method with the same name as the class   |
| [CouplingBetweenObjects](http://phpmd.org/rules/design.html#couplingbetweenobjects)                           | Design         | 2        | Check that classes do not have higher coupling                                 |
| [CyclomaticComplexity](http://phpmd.org/rules/codesize.html#cyclomaticcomplexity)                             | Best Practices | 3        | Check cyclomatic complexity                                                    |
| [DepthOfInheritance](http://phpmd.org/rules/design.html#depthofinheritance)                                   | Design         | 4        | Ensure that class hirearchy is not too large                                   |
| [DevelopmentCodeFragment](http://phpmd.org/rules/design.html#developmentcodefragment)                         | Design         | 2        | Do not call print_r in production call                                         |
| [ElseExpression](http://phpmd.org/rules/cleancode.html#elseexpression)                                        | Code Style     | 1        | Check for code simplification and not use else when not necessary              |
| [EvalExpression](http://phpmd.org/rules/design.html#evalexpression)                                           | Design         | 4        | Check for eval expression.                                                     |
| [ExcessiveClassComplexity](http://phpmd.org/rules/codesize.html#excessiveclasscomplexity)                     | Best Practices | 3        | Check class complexity                                                         |
| [ExcessiveClassLength](http://phpmd.org/rules/codesize.html#excessiveclasslength)                             | Best Practices | 3        | Check class maximum number of lines                                            |
| [ExcessiveMethodLength](http://phpmd.org/rules/codesize.html#excessivemethodlength)                           | Best Practices | 3        | Check max number of lines of functions (100 by default)                        |
| [ExcessiveParameterList](http://phpmd.org/rules/codesize.html#excessiveparameterlist)                         | Best Practices | 3        | Functions should not have more than 10 parameters                              |
| [ExcessivePublicCount](http://phpmd.org/rules/codesize.html#excessivepubliccount)                             | Best Practices | 3        | Classes should not have more than 55 attributes and functions                  |
| [ExitExpression](http://phpmd.org/rules/design.html#exitexpression)                                           | Design         | 1        | Check exit expression in functions                                             |
| [GotoStatement](http://phpmd.org/rules/design.html#gotostatement)                                             | Design         | 4        | Do not use goto                                                                |
| [LongVariable](http://phpmd.org/rules/naming.html#longvariable)                                               | Design         | 3        | Avoid long variables names (more than 20 characters)                           |
| [NPathComplexity](http://phpmd.org/rules/codesize.html#npathcomplexity)                                       | Best Practices | 3        | Check function complexity                                                      |
| [NumberOfChildren](http://phpmd.org/rules/design.html#numberofchildren)                                       | Design         | 2        | Ensure class has less than 15 children                                         |
| [ShortMethodName](http://phpmd.org/rules/naming.html#shortmethodname)                                         | Design         | 3        | Avoid short methods names (more than 3 characters)                             |
| [ShortVariable](http://phpmd.org/rules/naming.html#shortvariable)                                             | Design         | 3        | Avoid short variables names (more than 3 charactrs)                            |
| [StaticAccess](http://phpmd.org/rules/cleancode.html#staticaccess)                                            | Code Style     | 1        | Avoid static access                                                            |
| [TooManyFields](http://phpmd.org/rules/codesize.html#toomanyfields)                                           | Best Practices | 3        | Keep the number of fields for classes under 15.                                |
| [TooManyMethods](http://phpmd.org/rules/codesize.html#toomanymethods)                                         | Best Practices | 3        | Class has too many getters                                                     |
| [TooManyPublicMethods](http://phpmd.org/rules/codesize.html#toomanypublicmethods)                             | Best Practices | 3        | Keep number of public methods in classes under 10.                             |
| [UnusedFormalParameter](http://phpmd.org/rules/unusedcode.html#unusedformalparameter)                         | Error Prone    | 3        | Avoid unused parameters                                                        |
| [UnusedLocalVariable](http://phpmd.org/rules/unusedcode.html#unusedlocalvariable)                             | Error Prone    | 3        | Avoid unused local variables                                                   |
| [UnusedPrivateField](http://phpmd.org/rules/unusedcode.html#unusedprivatefield)                               | Error Prone    | 3        | Avoid unused private fields                                                    |
| [UnusedPrivateMethod](http://phpmd.org/rules/unusedcode.html#unusedprivatemethod)                             | Error Prone    | 3        | Avoid unused private methods                                                   |
