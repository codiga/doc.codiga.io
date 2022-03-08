---
id: rules-shell
title: Shellscripting rules
description: Code Analysis rules of Codiga for Shell scripts detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - Shell
---

| Rule                                                       | Category       | Severity | Description                                                                                                   |
| ---------------------------------------------------------- | -------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| 1001                                                       | Error Prone    | 3        | This \\N will be a regular 'N' in this context.                                                               |
| 1003                                                       | Error Prone    | 3        | Want to escape a single quote? echo 'This is how it'\\''s done'.                                              |
| 1004                                                       | Error Prone    | 3        | This backslash+linefeed is literal. Break outside single quotes if you just want to break the line.           |
| 1007                                                       | Error Prone    | 2        | Remove space after = if trying to assign a value (for empty string                                            |
| 1008                                                       | Code Style     | 4        | This shebang was unrecognized. Note that ShellCheck only handles sh/bash/dash/ksh.                            |
| 1009                                                       | Error Prone    | 3        | The mentioned syntax error was in this elif clause.                                                           |
| 1010                                                       | Error Prone    | 2        | Use semicolon or linefeed before 'fi' (or quote to make it literal).                                          |
| 1012                                                       | Error Prone    | 2        | \\r is just literal 'r' here. For carriage return                                                             |
| 1014                                                       | Error Prone    | 2        | Use 'if cmd; then ..' to check exit code                                                                      |
| 1017                                                       | Error Prone    | 1        | Literal carriage return. Run script through tr -d '\\r' .                                                     |
| 1018                                                       | Error Prone    | 1        | This is a unicode non-breaking space. Delete and retype it.                                                   |
| [1019](https://github.com/koalaman/shellcheck/wiki/SC1019) | Error Prone    | 1        | Expected this to be an argument to the unary condition.                                                       |
| 1020                                                       | Error Prone    | 1        | You need a space before the ]].                                                                               |
| 1035                                                       | Error Prone    | 1        | You are missing a required space after the !.                                                                 |
| 1036                                                       | Error Prone    | 1        | (' is invalid here. Did you forget to escape it?                                                              |
| [1046](https://github.com/koalaman/shellcheck/wiki/SC1046) | Error Prone    | 1        | Couldn't find 'fi' for this 'if'.                                                                             |
| [1047](https://github.com/koalaman/shellcheck/wiki/SC1047) | Error Prone    | 1        | Expected 'fi' matching previously mentioned 'if'.                                                             |
| 1048                                                       | Error Prone    | 1        | Can't have empty else clauses (use 'true' as a no-op).                                                        |
| 1049                                                       | Error Prone    | 1        | Did you forget the 'then' for this 'if'?                                                                      |
| 1050                                                       | Error Prone    | 1        | Expected 'then'.                                                                                              |
| 1054                                                       | Error Prone    | 1        | You need a space after the '{'.                                                                               |
| 1055                                                       | Error Prone    | 1        | You need at least one command here. Use 'true;' as a no-op.                                                   |
| 1056                                                       | Error Prone    | 1        | Expected a '}'. If you have one                                                                               |
| 1058                                                       | Error Prone    | 1        | Expected 'do'.                                                                                                |
| 1061                                                       | Error Prone    | 1        | Couldn't find 'done' for this 'do'.                                                                           |
| 1062                                                       | Error Prone    | 1        | Expected 'done' matching previously mentioned 'do'.                                                           |
| [1064](https://github.com/koalaman/shellcheck/wiki/SC1064) | Error Prone    | 1        | Expected a { to open the function definition.                                                                 |
| 1065                                                       | Error Prone    | 1        | Trying to declare parameters? Don't. Use () and refer to params as $1                                         |
| 1066                                                       | Error Prone    | 1        | Don't use $ on the left side of assignments.                                                                  |
| 1068                                                       | Code Style     | 4        | Don't put spaces around the = in assignments (or quote to make it literal).                                   |
| [1070](https://github.com/koalaman/shellcheck/wiki/SC1070) | Error Prone    | 1        | Parsing stopped here. Mismatched keywords or invalid parentheses?                                             |
| 1071                                                       | Error Prone    | 1        | ShellCheck only supports sh/bash/dash/ksh scripts. Sorry!                                                     |
| 1072                                                       | Error Prone    | 1        | Expected 'then'. Fix any mentioned problems and try again.                                                    |
| 1073                                                       | Error Prone    | 1        | Couldn't parse this escaped char. Fix to allow more checks.                                                   |
| [1075](https://github.com/koalaman/shellcheck/wiki/SC1075) | Error Prone    | 1        | Use 'elif' instead of 'else if' (or put 'if' on new line if nesting).                                         |
| 1078                                                       | Error Prone    | 2        | Did you forget to close this double quoted string?                                                            |
| 1079                                                       | Error Prone    | 3        | This is actually an end quote                                                                                 |
| [1080](https://github.com/koalaman/shellcheck/wiki/SC1080) | Error Prone    | 1        | You need \\ before line feeds to break lines in [ ].                                                          |
| [1082](https://github.com/koalaman/shellcheck/wiki/SC1082) | Error Prone    | 1        | This file has a UTF-8 BOM. Remove it with: LC_CTYPE=C sed '1s/^...//' < yourscript .                          |
| 1083                                                       | Code Style     | 4        | This } is literal. Check expression (missing ;/\\n?) or quote it.                                             |
| [1084](https://github.com/koalaman/shellcheck/wiki/SC1084) | Error Prone    | 1        | Use #! and not !# for shebang                                                                                 |
| 1086                                                       | Error Prone    | 1        | Don't use $ on the iterator name in for loops.                                                                |
| 1087                                                       | Code Style     | 4        | Use braces when expanding arrays                                                                              |
| 1088                                                       | Error Prone    | 1        | Parsing stopped here. Invalid use of parentheses?                                                             |
| 1089                                                       | Error Prone    | 1        | Parsing stopped here. Is this keyword correctly matched up?                                                   |
| 1090                                                       | Code Style     | 4        | Can't follow non-constant source. Use a directive to specify location.                                        |
| 1091                                                       | Error Prone    | 3        | Not following: /etc/os-release was not specified as input (see shellcheck -x).                                |
| 1095                                                       | Error Prone    | 1        | You need a space or linefeed between the function name and body.                                              |
| 1097                                                       | Code Style     | 4        | Unexpected ==. For assignment                                                                                 |
| [1099](https://github.com/koalaman/shellcheck/wiki/SC1099) | Best Practices | 1        | You need a space before the #.                                                                                |
| 1101                                                       | Error Prone    | 1        | Delete trailing spaces after \\ to break line (or use quotes for literal space).                              |
| 1102                                                       | Error Prone    | 2        | Shells disambiguate $(( differently or not at all. For $(command substition)                                  |
| 1104                                                       | Error Prone    | 1        | Use #! and not ! for shebang                                                                                  |
| [1105](https://github.com/koalaman/shellcheck/wiki/SC1105) | Error Prone    | 2        | Shells disambiguate (( differently or not at all. For subshell                                                |
| 1110                                                       | Error Prone    | 2        | This is a unicode quote. Delete and retype it (or quote to make literal).                                     |
| 1111                                                       | Error Prone    | 2        | This is a unicode quote. Delete and retype it (or ignore/singlequote for literal).                            |
| 1113                                                       | Error Prone    | 1        | Use #! for the shebang                                                                                        |
| 1114                                                       | Code Style     | 4        | Remove leading spaces before the shebang.                                                                     |
| 1115                                                       | Error Prone    | 1        | Remove spaces between # and ! in the shebang.                                                                 |
| 1116                                                       | Error Prone    | 1        | Missing $ on a $((..)) expression? (or use ( ( for arrays).                                                   |
| 1117                                                       | Code Style     | 4        | Backslash is literal in \\’". Prefer explicit escaping: "\\\\’"."                                             |
| 1119                                                       | Error Prone    | 1        | Add a linefeed between end token and terminating ')'.                                                         |
| 1126                                                       | Error Prone    | 1        | Place shellcheck directives before commands                                                                   |
| 1127                                                       | Error Prone    | 1        | Was this intended as a comment? Use # in sh.                                                                  |
| 1128                                                       | Error Prone    | 1        | The shebang must be on the first line. Delete blanks and move comments.                                       |
| [2000](https://github.com/koalaman/shellcheck/wiki/SC2000) | Best Practices | 4        | See if you can use ${#variable} instead.                                                                      |
| 2001                                                       | Code Style     | 4        | See if you can use ${variable//search/replace} instead.                                                       |
| 2002                                                       | Code Style     | 4        | Useless cat. Consider piping instead                                                                          |
| 2003                                                       | Best Practices | 4        | expr is antiquated. Consider rewriting this using $((..))                                                     |
| 2004                                                       | Code Style     | 4        | $/${} is unnecessary on arithmetic variables.                                                                 |
| 2005                                                       | Code Style     | 4        | Useless echo? Instead of 'echo $(cmd)'                                                                        |
| 2006                                                       | Best Practices | 4        | Use $(...) notation instead of legacy backticked `...`.                                                       |
| 2007                                                       | Code Style     | 4        | Use $((..)) instead of deprecated $[..]                                                                       |
| 2009                                                       | Error Prone    | 3        | Consider using pgrep instead of grepping ps output.                                                           |
| 2010                                                       | Error Prone    | 2        | Don't use ls with piping grep. Use a glob or a for loop with a condition to allow non-alphanumeric filenames. |
| 2012                                                       | Code Style     | 4        | Use find instead of ls to better handle non-alphanumeric filenames.                                           |
| 2013                                                       | Code Style     | 4        | To read lines rather than words                                                                               |
| [2014](https://github.com/koalaman/shellcheck/wiki/SC2014) | Error Prone    | 3        | This will expand once before find runs                                                                        |
| 2016                                                       | Code Style     | 4        | Expressions don't expand in single quotes                                                                     |
| 2017                                                       | Error Prone    | 3        | Increase precision by replacing a/b*c with a*c/b.                                                             |
| 2018                                                       | Error Prone    | 3        | Use '[:lower:]' to support accents and foreign alphabets.                                                     |
| 2019                                                       | Error Prone    | 3        | Use '[:upper:]' to support accents and foreign alphabets.                                                     |
| 2020                                                       | Error Prone    | 3        | tr replaces sets of chars                                                                                     |
| 2021                                                       | Error Prone    | 3        | Don't use [] around classes in tr                                                                             |
| [2022](https://github.com/koalaman/shellcheck/wiki/SC2022) | Error Prone    | 3        | Note that unlike globs                                                                                        |
| 2023                                                       | Error Prone    | 3        | The shell may override 'time' as seen in man time(1). Use 'command time ..' for that one.                     |
| 2024                                                       | Error Prone    | 2        | sudo doesn't affect redirects. Use sudo cat with piping                                                       |
| [2026](https://github.com/koalaman/shellcheck/wiki/SC2026) | Error Prone    | 3        | This word is outside of quotes. Did you intend to 'nest ''single quotes'"' instead'? "                        |
| 2027                                                       | Error Prone    | 2        | The surrounding quotes actually unquote this. Remove or escape them.                                          |
| 2028                                                       | Error Prone    | 3        | echo won't expand escape sequences. Consider printf.                                                          |
| [2029](https://github.com/koalaman/shellcheck/wiki/SC2029) | Error Prone    | 3        | Expansion on the client side                                                                                  |
| 2030                                                       | Error Prone    | 3        | Modification of RSYSLOG\*VERSION is local (to subshell caused by pipeline).                                   |
| 2031                                                       | Error Prone    | 3        | RSYSLOG\*VERSION was modified in a subshell. That change might be lost.                                       |
| 2032                                                       | Error Prone    | 3        | Use own script or sh -c '..' to run this from sudo.                                                           |
| 2033                                                       | Error Prone    | 2        | Shell functions can't be passed to external commands.                                                         |
| 2034                                                       | Code Style     | 4        | START_OF_ROOT_PARTITION appears unused. Verify use (or export if used externally).                            |
| 2035                                                       | Code Style     | 4        | Use ./\_glob\* or -- \_glob\* so names with dashes won't become options.                                      |
| [2036](https://github.com/koalaman/shellcheck/wiki/SC2036) | Error Prone    | 2        | If you wanted to assign the output of the pipeline                                                            |
| 2038                                                       | Code Style     | 4        | Use -print0/-0 or -exec + to allow for non-alphanumeric filenames.                                            |
| 2039                                                       | Code Style     | 4        | Undefined keyword for POSIX sh                                                                                |
| 2043                                                       | Code Style     | 4        | This loop will only ever run once for a constant value. Did you perhaps mean to loop over dir/\*              |
| 2044                                                       | Code Style     | 4        | For loops over find output are fragile. Use find -exec or a while read loop.                                  |
| 2045                                                       | Code Style     | 4        | Iterating over ls output is fragile. Use globs.                                                               |
| 2046                                                       | Safety         | 2        | Quote this to prevent word splitting.                                                                         |
| 2048                                                       | Code Style     | 4        | Use $@" (with quotes) to prevent whitespace problems."                                                        |
| 2049                                                       | Error Prone    | 2        | "=~ is for regex, but this looks like a glob. Use = instead."                                                 |
| 2050                                                       | Error Prone    | 2        | This expression is constant. Did you forget the $ on a variable?                                              |
| 2053                                                       | Code Style     | 4        | Quote the right-hand side of != in [[]] to prevent glob matching.                                             |
| 2059                                                       | Code Style     | 4        | Don't use variables in the printf format string. Use printf ..%s.." "$foo"."                                  |
| 2060                                                       | Error Prone    | 2        | Quote parameters to tr to prevent glob expansion.                                                             |
| 2061                                                       | Code Style     | 4        | Quote the parameter to -iname so the shell won't interpret it.                                                |
| 2062                                                       | Error Prone    | 2        | Quote the grep pattern so the shell won't interpret it.                                                       |
| 2063                                                       | Error Prone    | 2        | Grep uses regex                                                                                               |
| 2064                                                       | Code Style     | 4        | Use single quotes                                                                                             |
| 2066                                                       | Error Prone    | 1        | Since you double quoted this                                                                                  |
| 2067                                                       | Error Prone    | 1        | Missing ';' or + terminating -exec. You can't use piping                                                      |
| 2068                                                       | Code Style     | 4        | Double quote array expansions to avoid re-splitting elements.                                                 |
| 2069                                                       | Error Prone    | 2        | To redirect stdout+stderr                                                                                     |
| 2070                                                       | Error Prone    | 1        | -n doesn't work with unquoted arguments. Quote or use [[]].                                                   |
| 2071                                                       | Code Style     | 4        | > is for string comparisons. Use -gt instead.                                                                 |
| [2072](https://github.com/koalaman/shellcheck/wiki/SC2072) | Error Prone    | 1        | Decimals are not supported. Either use integers only                                                          |
| 2076                                                       | Error Prone    | 1        | Don't quote rhs of =~                                                                                         |
| 2077                                                       | Error Prone    | 1        | You need spaces around the comparison operator.                                                               |
| 2078                                                       | Error Prone    | 1        | This expression is constant. Did you forget a $ somewhere?                                                    |
| 2081                                                       | Error Prone    | 1        | [ .. ] can't match globs. Use [[..]] or case statement.                                                       |
| [2082](https://github.com/koalaman/shellcheck/wiki/SC2082) | Error Prone    | 1        | To expand via indirection                                                                                     |
| 2086                                                       | Safety         | 2        | Double quote to prevent globbing and word splitting.                                                          |
| 2087                                                       | Error Prone    | 2        | Quote 'VS_CMDS' to make here document expansions happen on the server side rather than on the client.         |
| 2088                                                       | Error Prone    | 2        | Tilde does not expand in quotes. Use $HOME.                                                                   |
| 2089                                                       | Code Style     | 4        | Quotes/backslashes will be treated literally. Use an array.                                                   |
| 2090                                                       | Code Style     | 4        | Quotes/backslashes in this variable will not be respected.                                                    |
| 2091                                                       | Code Style     | 4        | Remove surrounding $() to avoid executing output.                                                             |
| 2092                                                       | Error Prone    | 2        | Remove backticks to avoid executing output.                                                                   |
| [2093](https://github.com/koalaman/shellcheck/wiki/SC2093) | Error Prone    | 2        | Remove exec " if script should continue after this command."                                                  |
| 2094                                                       | Code Style     | 4        | Make sure not to read and write the same file in the same pipeline.                                           |
| 2096                                                       | Error Prone    | 1        | On most OS, shebangs can only specify a single parameter                                                      |
| [2097](https://github.com/koalaman/shellcheck/wiki/SC2097) | Error Prone    | 2        | This assignment is only seen by the forked process.                                                           |
| [2098](https://github.com/koalaman/shellcheck/wiki/SC2098) | Error Prone    | 2        | This expansion will not see the mentioned assignment.                                                         |
| 2100                                                       | Error Prone    | 2        | Use $((..)) for arithmetics                                                                                   |
| 2102                                                       | Error Prone    | 3        | Ranges can only match single chars (mentioned due to duplicates).                                             |
| 2103                                                       | Code Style     | 4        | Use a ( subshell ) to avoid having to cd back.                                                                |
| 2104                                                       | Error Prone    | 1        | In functions, use return instead of break                                                                     |
| [2105](https://github.com/koalaman/shellcheck/wiki/SC2105) | Error Prone    | 1        | continue is only valid in loops.                                                                              |
| 2112                                                       | Code Style     | 4        | function' keyword is non-standard. Delete it.                                                                 |
| 2113                                                       | Error Prone    | 2        | function' keyword is non-standard. Use 'foo()' instead of 'function foo'.                                     |
| 2115                                                       | Error Prone    | 2        | Use ${var:?}" to ensure this never expands to /usr ."                                                         |
| 2116                                                       | Code Style     | 4        | Useless echo? Instead of 'cmd $(echo foo)'                                                                    |
| 2119                                                       | Code Style     | 4        | Use start_mysql $@" if function's $1 should mean script's $1."                                                |
| 2120                                                       | Code Style     | 4        | A function references arguments but no argument is passed                                                     |
| 2121                                                       | Code Style     | 4        | To assign a variable, do not use set                                                                          |
| 2124                                                       | Error Prone    | 2        | Assigning an array to a string! Assign as array                                                               |
| 2125                                                       | Error Prone    | 2        | Brace expansions and globs are literal in assignments. Quote it or use an array.                              |
| 2126                                                       | Error Prone    | 4        | Consider using grep -c instead of grep and pipe with wc -l                                                    |
| 2128                                                       | Code Style     | 4        | Expanding an array without an index only gives the first element.                                             |
| 2129                                                       | Code Style     | 4        | Consider using { cmd1; cmd2; } >> file instead of individual redirects.                                       |
| 2139                                                       | Error Prone    | 2        | This expands when defined                                                                                     |
| 2140                                                       | Code Style     | 4        | Word is of the form A"B"C" (B indicated). Did you mean "ABC" or "A\\"B\\"C"?"                                 |
| 2142                                                       | Error Prone    | 1        | Aliases can't use positional parameters. Use a function.                                                      |
| 2143                                                       | Error Prone    | 4        | Use egrep -q instead of comparing output with [ -n .. ].                                                      |
| 2144                                                       | Error Prone    | 1        | -e doesn't work with globs. Use a for loop.                                                                   |
| 2145                                                       | Code Style     | 4        | Argument mixes string and array. Use \* or separate argument.                                                 |
| 2146                                                       | Error Prone    | 2        | This action ignores everything before the -o. Use \\( \\) to group.                                           |
| 2148                                                       | Code Style     | 4        | Tips depend on target shell and yours is unknown. Add a shebang.                                              |
| 2152                                                       | Error Prone    | 1        | Can only return 0-255. Other data should be written to stdout.                                                |
| 2153                                                       | Code Style     | 4        | Possible misspelling: FGREP may not be assigned                                                               |
| 2154                                                       | Code Style     | 4        | xtra is referenced but not assigned.                                                                          |
| 2155                                                       | Code Style     | 4        | Declare and assign separately to avoid masking return values.                                                 |
| [2156](https://github.com/koalaman/shellcheck/wiki/SC2156) | Error Prone    | 2        | Injecting filenames is fragile and insecure. Use parameters.                                                  |
| [2157](https://github.com/koalaman/shellcheck/wiki/SC2157) | Error Prone    | 1        | Argument to -z is always false due to literal strings.                                                        |
| 2160                                                       | Error Prone    | 4        | Instead of '[ true ]', just use 'true'                                                                        |
| 2161                                                       | Error Prone    | 4        | Instead of '[ 1 ]', just use '1'                                                                              |
| 2162                                                       | Code Style     | 4        | read without -r will mangle backslashes.                                                                      |
| 2163                                                       | Code Style     | 4        | This does not export 'atom_env_pair'. Remove $/${} for that                                                   |
| 2164                                                       | Code Style     | 4        | Use 'cd ... or exit' or 'cd ... or return' in case cd fails.                                                  |
| 2165                                                       | Error Prone    | 2        | This nested loop overrides the index variable of its parent.                                                  |
| 2166                                                       | Error Prone    | 3        | Prefer [ p ] or [ q ] as [ p -o q ] is not well defined.                                                      |
| 2167                                                       | Error Prone    | 2        | This parent loop has its index variable overridden.                                                           |
| 2168                                                       | Error Prone    | 1        | local' is only valid in functions.                                                                            |
| 2169                                                       | Error Prone    | 2        | Not supported in dash                                                                                         |
| [2171](https://github.com/koalaman/shellcheck/wiki/SC2171) | Error Prone    | 2        | Found trailing ] outside test. Missing [?                                                                     |
| [2172](https://github.com/koalaman/shellcheck/wiki/SC2172) | Error Prone    | 2        | Trapping signals by number is not well defined. Prefer signal names.                                          |
| 2173                                                       | Error Prone    | 1        | SIGKILL/SIGSTOP can not be trapped.                                                                           |
| 2174                                                       | Error Prone    | 2        | When used with -p                                                                                             |
| 2175                                                       | Error Prone    | 4        | Quote this invalid brace expansion since it should be passed literally to eval.                               |
| 2176                                                       | Error Prone    | 2        | time' is undefined for pipelines. time single stage or bash -c instead.                                       |
| 2178                                                       | Error Prone    | 2        | Variable was used as an array but is now assigned a string.                                                   |
| 2179                                                       | Error Prone    | 2        | Use array+=(item") to append items to an array."                                                              |
| 2181                                                       | Code Style     | 4        | Check exit code directly with e.g. 'if mycmd;'                                                                |
| 2183                                                       | Error Prone    | 2        | This format string has 1 variables                                                                            |
| 2184                                                       | Error Prone    | 2        | Quote arguments to unset so they're not glob expanded.                                                        |
| 2185                                                       | Code Style     | 4        | Some finds don't have a default path. Specify '.' explicitly.                                                 |
| 2186                                                       | Code Style     | 4        | tempfile is deprecated. Use mktemp instead.                                                                   |
| 2187                                                       | Error Prone    | 2        | Ash scripts will be checked as Dash. Add '# shellcheck shell=dash' to silence.                                |
| 2188                                                       | Error Prone    | 2        | This redirection doesn't have a command. Move to its command (or use 'true' as no-op).                        |
| 2190                                                       | Error Prone    | 2        | Elements in associative arrays need index                                                                     |
| 2191                                                       | Code Style     | 4        | The = here is literal. To assign by index                                                                     |
| [2193](https://github.com/koalaman/shellcheck/wiki/SC2193) | Error Prone    | 2        | The arguments to this comparison can never be equal. Make sure your syntax is correct.                        |
| [2194](https://github.com/koalaman/shellcheck/wiki/SC2194) | Error Prone    | 2        | This word is constant. Did you forget the $ on a variable?                                                    |
| 2195                                                       | Error Prone    | 2        | This pattern will never match the case statement's word. Double check them.                                   |
| 2196                                                       | Best Practices | 4        | egrep is non-standard and deprecated. Use grep -E instead.                                                    |
| 2197                                                       | Error Prone    | 3        | fgrep is non-standard and deprecated. Use grep -F instead.                                                    |
| 2198                                                       | Code Style     | 4        | Arrays don't work as operands in [ ]. Use a loop (or concatenate with \_ instead of @).                       |
| 2199                                                       | Error Prone    | 1        | Arrays implicitly concatenate in [[]]. Use a loop (or explicit \_ instead of @).                              |
| 2203                                                       | Error Prone    | 1        | Globs are ignored in [[]] except right of =/!=. Use a loop.                                                   |
| 2206                                                       | Code Style     | 4        | Quote to prevent word splitting/globbing                                                                      |
| 2207                                                       | Code Style     | 4        | Prefer mapfile or read -a to split command output (or quote to avoid splitting).                              |
| 2209                                                       | Code Style     | 4        | Use var=$(command) to assign output (or quote to assign string).                                              |
| 2210                                                       | Error Prone    | 2        | This is a file redirection. Was it supposed to be a comparison or fd operation?                               |
| 2211                                                       | Error Prone    | 2        | This is a glob used as a command name. Was it supposed to be in ${..}                                         |
| 2213                                                       | Error Prone    | 2        | getopts specified -v                                                                                          |
| 2214                                                       | Error Prone    | 2        | This case is not specified by getopts.                                                                        |
| 2215                                                       | Error Prone    | 2        | This flag is used as a command name. Bad line break or missing [ .. ]?                                        |
| 2216                                                       | Error Prone    | 2        | Piping to 'rm', a command that doesn't read stdin. Wrong command or missing xargs?                            |
| 2217                                                       | Error Prone    | 2        | Redirecting to 'true'                                                                                         |
| 2219                                                       | Code Style     | 4        | Instead of 'let expr'                                                                                         |
| 2220                                                       | Error Prone    | 2        | Invalid flags are not handled. Add a \*) case.                                                                |
| 2221                                                       | Error Prone    | 2        | This pattern always overrides a later one.                                                                    |
| 2222                                                       | Error Prone    | 2        | This pattern never matches because of a previous pattern.                                                     |
| 2223                                                       | Code Style     | 4        | This default assignment may cause DoS due to globbing. Quote it.                                              |
| 2225                                                       | Error Prone    | 1        | This cp has no destination. Check the arguments.                                                              |
| 2226                                                       | Error Prone    | 2        | This ln has no destination. Check the arguments                                                               |
| 2230                                                       | Code Style     | 4        | which is a non-standard tool. Use builtin 'command -v' instead.                                               |
| 2231                                                       | Code Style     | 4        | Quote expansions in this for loop glob to prevent wordsplitting                                               |
| [2232](https://github.com/koalaman/shellcheck/wiki/SC2232) | Error Prone    | 2        | Can't use sudo with builtins like cd. Did you want sudo sh -c .. instead?                                     |
| 2233                                                       | Error Prone    | 4        | Remove superfluous (..) around condition.                                                                     |
| [2234](https://github.com/koalaman/shellcheck/wiki/SC2234) | Error Prone    | 4        | Remove superfluous (..) around test command.                                                                  |
| 2235                                                       | Error Prone    | 4        | Use { ..; } instead of (..) to avoid subshell overhead.                                                       |
| 2236                                                       | Error Prone    | 4        | Use -n instead of ! -z.                                                                                       |
| 2237                                                       | Error Prone    | 4        | Use [ -n .. ] instead of ! [ -z .. ].                                                                         |
| 2242                                                       | Error Prone    | 1        | Can only exit with status 0-255. Other data should be written to stdout/stderr.                               |
