---
id: rules-dart
title: Dart rules
description: All Rules from Codiga for Dart
---

| Rule                                                 | Category   | Severity | Description                                                                                                        |
| ---------------------------------------------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| ALWAYS_DECLARE_RETURN_TYPES                          | Code Style | 2        | Method should have return type                                                                                     |
| always_specify_types                                 | Code Style | 4        | Always specify types                                                                                               |
| ARGUMENT_TYPE_NOT_ASSIGNABLE                         | Code Style | 3        | Invalid assignments                                                                                                |
| ASSET_DOES_NOT_EXIST                                 | Code Style | 3        | Asset does not exists                                                                                              |
| AVOID_BOOL_LITERALS_IN_CONDITIONAL_EXPRESSIONS       | Code Style | 4        | Avoid bool literals in condition                                                                                   |
| AVOID_CLASSES_WITH_ONLY_STATIC_MEMBERS               | Code Style | 4        | Avoid defining a class that contains only static members.                                                          |
| AVOID_ESCAPING_INNER_QUOTES                          | Code Style | 4        | Avoid escaping inner quotes by converting surrounding quotes.                                                      |
| AVOID_FUNCTION_LITERALS_IN_FOREACH_CALLS             | Code Style | 4        | Avoid using `forEach` with a function literal.                                                                     |
| avoid_init_to_null                                   | Code Style | 4        | Don't explicitly initialize variables to null.                                                                     |
| AVOID_POSITIONAL_BOOLEAN_PARAMETERS                  | Code Style | 4        | Avoid positional boolean parameters.                                                                               |
| AVOID_PRINT                                          | Code Style | 2        | Avoid `print` calls in production code.                                                                            |
| AVOID_REDUNDANT_ARGUMENT_VALUES                      | Code Style | 4        | Avoid redundant argument values.                                                                                   |
| AVOID_RETURN_TYPES_ON_SETTERS                        | Code Style | 4        | Avoid return types on setters.                                                                                     |
| AVOID_UNNECESSARY_CONTAINERS                         | Code Style | 4        | Avoid unnecessary containers.                                                                                      |
| AVOID_VOID_ASYNC                                     | Code Style | 4        | Avoid async functions that return void.                                                                            |
| AVOID_WEB_LIBRARIES_IN_FLUTTER                       | Code Style | 4        | Avoid using web-only libraries outside Flutter web plugin packages.                                                |
| AWAIT_ONLY_FUTURES                                   | Code Style | 4        | await' should only apply to futures                                                                                |
| BODY_MIGHT_COMPLETE_NORMALLY                         | Code Style | 3        | The body might complete normally                                                                                   |
| CAMEL_CASE_TYPES                                     | Code Style | 4        | Name types using UpperCamelCase.                                                                                   |
| CAST_NULLABLE_TO_NON_NULLABLE                        | Code Style | 4        | Don't cast a nullable value to a non nullable type.                                                                |
| CAST_TO_NON_TYPE                                     | Code Style | 3        | The name isn't a type                                                                                              |
| close_sinks                                          | Code Style | 4        | Close instances of `dart.core.Sink`.\n                                                                             |
| CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE            | Code Style | 3        | Const variables must be initialized with a constant value.                                                         |
| CONST_WITH_NON_CONSTANT_ARGUMENT                     | Code Style | 3        | Arguments of a constant creation must be constant expressions.                                                     |
| COULD_NOT_INFER                                      | Code Style | 3        | Cannot infer type                                                                                                  |
| CREATION_WITH_NON_TYPE                               | Code Style | 3        | The name 'BubbleStyle' isn't a class.\n                                                                            |
| DEAD_CODE                                            | Code Style | 4        | Dead code.                                                                                                         |
| DEAD_CODE_ON_CATCH_SUBTYPE                           | Code Style | 4        | Dead code on catch subtype.                                                                                        |
| DEAD_NULL_AWARE_EXPRESSION                           | Code Style | 4        | The left operand can't be null.                                                                                    |
| DEFAULT_LIST_CONSTRUCTOR                             | Code Style | 3        | The default 'List' constructor isn't available when null safety is enabled.                                        |
| DEPEND_ON_REFERENCED_PACKAGES                        | Code Style | 4        | Depend on referenced packages.                                                                                     |
| DEPRECATED_MEMBER_USE                                | Code Style | 4        | Member is deprecated and shouldn't be used. This property is no longer used                                        |
| DIRECTIVES_ORDERING                                  | Code Style | 4        | Import ordering                                                                                                    |
| DUPLICATE_IMPORT                                     | Code Style | 4        | Duplicate import.                                                                                                  |
| EMPTY_CATCHES                                        | Code Style | 4        | Avoid empty catch blocks.                                                                                          |
| empty_constructor_bodies                             | Code Style | 4        | Use `;` instead of `{}` for empty constructor bodies.                                                              |
| empty_statements                                     | Code Style | 4        | Detect empty statements (dead code)                                                                                |
| EOL_AT_END_OF_FILE                                   | Code Style | 4        | Put a single newline at end of file.                                                                               |
| EXPECTED_TOKEN                                       | Code Style | 3        | Expected to find '['.                                                                                              |
| EXTENDS_NON_CLASS                                    | Code Style | 3        | Classes can only extend other classes.                                                                             |
| EXTRA_POSITIONAL_ARGUMENTS                           | Code Style | 3        | Too many positional arguments.                                                                                     |
| FILE_NAMES                                           | Code Style | 4        | Name source files using `lowercase_with_underscores`.                                                              |
| GETTER_NOT_SUBTYPE_SETTER_TYPES                      | Code Style | 3        | Invalid return type                                                                                                |
| HASH_AND_EQUALS                                      | Code Style | 4        | Override `hashCode` if overriding `==`                                                                             |
| ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE                 | Code Style | 2        | Illegal assignment to non-assignable expression.                                                                   |
| implementation_imports                               | Code Style | 4        | Don't import implementation files from another package.                                                            |
| IMPLEMENTS_NON_CLASS                                 | Code Style | 3        | Classes and mixins can only implement other classes and mixins.                                                    |
| IMPORT_OF_LEGACY_LIBRARY_INTO_NULL_SAFE              | Code Style | 4        | Legacy library                                                                                                     |
| INCLUDE_FILE_NOT_FOUND                               | Code Style | 3        | Include file not found                                                                                             |
| INVALID_ANNOTATION_TARGET                            | Code Style | 4        | Invalid annotation target                                                                                          |
| INVALID_ASSIGNMENT                                   | Code Style | 3        | Invalid assignments                                                                                                |
| INVALID_CONSTANT                                     | Code Style | 3        | Invalid constant value                                                                                             |
| INVALID_NULL_AWARE_OPERATOR                          | Code Style | 4        | The receiver can't be null because of short-circuiting                                                             |
| INVALID_OVERRIDE                                     | Code Style | 3        | Invalid override                                                                                                   |
| INVALID_USE_OF_PROTECTED_MEMBER                      | Code Style | 4        | Invalid use of protected members                                                                                   |
| INVARIANT_BOOLEANS                                   | Code Style | 4        | Conditions should not unconditionally evaluate to `true` or to `false`.                                            |
| JOIN_RETURN_WITH_ASSIGNMENT                          | Code Style | 4        | Join return statement with assignment when possible.                                                               |
| LIBRARY_PREFIXES                                     | Code Style | 4        | Use `lowercase_with_underscores` when specifying a library prefix.                                                 |
| LIST_ELEMENT_TYPE_NOT_ASSIGNABLE                     | Code Style | 3        | List element type not assignable                                                                                   |
| MISSING_ASSIGNABLE_SELECTOR                          | Code Style | 2        | Missing selector                                                                                                   |
| MISSING_DEFAULT_VALUE_FOR_PARAMETER                  | Code Style | 3        | Missing default value for parameter                                                                                |
| MISSING_ENUM_CONSTANT_IN_SWITCH                      | Code Style | 4        | Missing case clause for 'null'.                                                                                    |
| MISSING_IDENTIFIER                                   | Code Style | 3        | Expected an identifier.                                                                                            |
| MISSING_REQUIRED_ARGUMENT                            | Code Style | 2        | Missing required argument                                                                                          |
| MISSING_REQUIRED_PARAM                               | Code Style | 3        | Missing required parameters                                                                                        |
| MISSING_RETURN                                       | Code Style | 4        | Missing return value                                                                                               |
| MIXIN_OF_NON_CLASS                                   | Code Style | 3        | Classes can only mix in mixins and classes.                                                                        |
| MIXIN_WITH_NON_CLASS_SUPERCLASS                      | Code Style | 3        | Mixin can only be applied to class.                                                                                |
| MUST_BE_IMMUTABLE                                    | Code Style | 4        | Must be immutable                                                                                                  |
| MUST_CALL_SUPER                                      | Code Style | 4        | This method overrides a method annotated as '@mustCallSuper' in 'State'                                            |
| NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT               | Code Style | 3        | The class doesn't have a default constructor.                                                                      |
| NO_DEFAULT_SUPER_CONSTRUCTOR                         | Code Style | 2        | No default super constructor                                                                                       |
| NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER          | Code Style | 3        | Missing concrete implementations of methods                                                                        |
| NON_BOOL_CONDITION                                   | Code Style | 3        | Conditions must have a static type of 'bool'                                                                       |
| NON_CONSTANT_CASE_EXPRESSION                         | Code Style | 3        | Case expressions must be constant                                                                                  |
| NON_CONSTANT_DEFAULT_VALUE                           | Code Style | 3        | The default value of an optional parameter must be constant                                                        |
| non_constant_identifier_names                        | Code Style | 4        | Name non-constant identifiers using lowerCamelCase                                                                 |
| NON_CONSTANT_LIST_ELEMENT                            | Code Style | 3        | The values in a const list literal must be constants                                                               |
| NON_CONSTANT_MAP_VALUE                               | Code Style | 3        | The values in a const map literal must be constant                                                                 |
| NON_TYPE_AS_TYPE_ARGUMENT                            | Code Style | 3        | The name isn't a type so it can't be used as a type argument                                                       |
| NON_TYPE_IN_CATCH_CLAUSE                             | Code Style | 3        | The name isn't a type and can't be used in an on-catch clause.                                                     |
| NOOP_PRIMITIVE_OPERATIONS                            | Code Style | 4        | Noop primitive operations.                                                                                         |
| NOT_ASSIGNED_POTENTIALLY_NON_NULLABLE_LOCAL_VARIABLE | Code Style | 3        | The non-nullable local variable must be assigned before it can be used.                                            |
| NOT_INITIALIZED_NON_NULLABLE_INSTANCE_FIELD          | Code Style | 3        | Non-nullable instance field must be initialized.                                                                   |
| NOT_INITIALIZED_NON_NULLABLE_VARIABLE                | Code Style | 3        | The non-nullable variable must be initialized.                                                                     |
| NULLABLE_TYPE_IN_CATCH_CLAUSE                        | Code Style | 4        | A potentially nullable type can't be used in an 'on' clause because it isn't valid to throw a nullable expression. |
| OVERRIDDEN_FIELDS                                    | Code Style | 4        | Don't override fields.                                                                                             |
| OVERRIDE_ON_NON_OVERRIDING_MEMBER                    | Code Style | 4        | The field doesn't override an inherited getter or setter.                                                          |
| POSITIONAL_AFTER_NAMED_ARGUMENT                      | Code Style | 3        | Positional arguments must occur before named arguments.                                                            |
| PREFER_CONST_CONSTRUCTORS                            | Code Style | 4        | Prefer const with constant constructors.                                                                           |
| PREFER_CONST_CONSTRUCTORS_IN_IMMUTABLES              | Code Style | 4        | Prefer declaring const constructors on `@immutable` classes                                                        |
| PREFER_CONST_DECLARATIONS                            | Code Style | 2        | Prefer const over final for declarations                                                                           |
| PREFER_CONST_LITERALS_TO_CREATE_IMMUTABLES           | Code Style | 4        | Prefer const literals as parameters of constructors on @immutable classes.                                         |
| PREFER_FINAL_IN_FOR_EACH                             | Code Style | 4        | Prefer final in for-each loop variable if reference is not reassigned.                                             |
| PREFER_FINAL_LOCALS                                  | Code Style | 2        | Prefer final for variable declarations if they are not reassigned.                                                 |
| PREFER_IF_ELEMENTS_TO_CONDITIONAL_EXPRESSIONS        | Code Style | 4        | Prefer if elements to conditional expressions where possible.                                                      |
| PREFER_IF_NULL_OPERATORS                             | Code Style | 4        | Prefer using if null operators.                                                                                    |
| PREFER_INITIALIZING_FORMALS                          | Code Style | 4        | Use initializing formals when possible.                                                                            |
| PREFER_INTERPOLATION_TO_COMPOSE_STRINGS              | Code Style | 4        | Use interpolation to compose strings and values.                                                                   |
| PREFER_IS_EMPTY                                      | Code Style | 4        | Use isEmpty instead of length\n                                                                                    |
| PREFER_IS_NOT_EMPTY                                  | Code Style | 4        | Use `isNotEmpty` for Iterables and Maps.                                                                           |
| PREFER_NULL_AWARE_METHOD_CALLS                       | Code Style | 4        | Prefer null aware method calls.                                                                                    |
| PREFER_TYPING_UNINITIALIZED_VARIABLES                | Code Style | 4        | Prefer typing uninitialized variables and fields.                                                                  |
| REDIRECT_TO_NON_CLASS                                | Code Style | 2        | Name isn't a type and can't be used in a redirected constructor.                                                   |
| REQUIRE_TRAILING_COMMAS                              | Code Style | 4        | Missing a required trailing comma.                                                                                 |
| RETURN_OF_INVALID_TYPE                               | Code Style | 3        | Invalid return type                                                                                                |
| RETURN_OF_INVALID_TYPE_FROM_CLOSURE                  | Code Style | 3        | Invalid return type from closure                                                                                   |
| SIZED_BOX_FOR_WHITESPACE                             | Code Style | 4        | SizedBox for whitespace.                                                                                           |
| SORT_CHILD_PROPERTIES_LAST                           | Code Style | 2        | Sort child properties last in widget instance creations.                                                           |
| SORT_PUB_DEPENDENCIES                                | Code Style | 4        | Sort pub dependencies.                                                                                             |
| TYPE_ANNOTATE_PUBLIC_APIS                            | Code Style | 2        | Type annotate public APIs.                                                                                         |
| TYPE_ARGUMENT_NOT_MATCHING_BOUNDS                    | Code Style | 2        | Type arguments do not match bounds                                                                                 |
| TYPE_TEST_WITH_UNDEFINED_NAME                        | Code Style | 3        | Undefined name                                                                                                     |
| UNCHECKED_USE_OF_NULLABLE_VALUE                      | Code Style | 3        | Method can't be unconditionally invoked because the receiver can be 'null'.                                        |
| UNDEFINED_CONSTRUCTOR_IN_INITIALIZER                 | Code Style | 3        | Undefined constructor                                                                                              |
| UNDEFINED_GETTER                                     | Code Style | 3        | Undefined getter                                                                                                   |
| UNDEFINED_NAMED_PARAMETER                            | Code Style | 3        | Named parameter undefined                                                                                          |
| UNDEFINED_OPERATOR                                   | Code Style | 2        | Undefined operator                                                                                                 |
| UNDEFINED_SETTER                                     | Code Style | 3        | Undefined setter                                                                                                   |
| UNDEFINED_SUPER_MEMBER                               | Code Style | 3        | Undefined super member                                                                                             |
| unnecessary_brace_in_string_interps                  | Code Style | 4        | Avoid using braces in interpolation when not needed.                                                               |
| UNNECESSARY_CAST                                     | Code Style | 4        | Unnecessary cast.                                                                                                  |
| UNNECESSARY_NEW                                      | Code Style | 4        | Unnecessary new keyword.                                                                                           |
| UNNECESSARY_NON_NULL_ASSERTION                       | Code Style | 3        | Uneccessary non null assertion                                                                                     |
| UNNECESSARY_NULL_CHECKS                              | Code Style | 4        | Unnecessary null checks                                                                                            |
| UNNECESSARY_NULL_COMPARISON                          | Code Style | 4        | The operand can't be null                                                                                          |
| UNNECESSARY_PARENTHESIS                              | Code Style | 4        | Unnecessary parenthesis                                                                                            |
| unnecessary_statements                               | Code Style | 4        | Avoid using unnecessary statements                                                                                 |
| UNNECESSARY_STRING_INTERPOLATIONS                    | Code Style | 4        | Unnecessary string interpolation                                                                                   |
| UNNECESSARY_THIS                                     | Code Style | 2        | Unecessary this                                                                                                    |
| UNSUPPORTED_OPERATOR                                 | Code Style | 2        | The '===' operator is not supported                                                                                |
| UNUSED_CATCH_CLAUSE                                  | Code Style | 4        | Unused catch clause                                                                                                |
| UNUSED_CATCH_STACK                                   | Code Style | 4        | Stack trace not used                                                                                               |
| UNUSED_ELEMENT                                       | Code Style | 4        | Unused element                                                                                                     |
| UNUSED_FIELD                                         | Code Style | 4        | Unused fiel                                                                                                        |
| UNUSED_IMPORT                                        | Code Style | 4        | Unused import                                                                                                      |
| UNUSED_LABEL                                         | Code Style | 4        | Unused label                                                                                                       |
| UNUSED_LOCAL_VARIABLE                                | Code Style | 4        | Unused local variable                                                                                              |
| URI_HAS_NOT_BEEN_GENERATED                           | Code Style | 3        | URI has not been generated                                                                                         |
| USE_BUILD_CONTEXT_SYNCHRONOUSLY                      | Code Style | 4        | Use build context synchronuously                                                                                   |
| USE_LATE_FOR_PRIVATE_FIELDS_AND_VARIABLES            | Code Style | 4        | Use late for private members with non-nullable type.                                                               |
| USE_NAMED_CONSTANTS                                  | Code Style | 4        | Use named constants                                                                                                |
| USE_OF_VOID_RESULT                                   | Code Style | 2        | Use of void results                                                                                                |
| USE_STRING_BUFFERS                                   | Code Style | 4        | Use string buffers to compose strings                                                                              |
