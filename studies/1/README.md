# 1st UX Study

Conducted in 2022-02 with 2 participants.

---

**NOTICE TO THE READER:** **If you have any affiliation to Squeak/HPI, please try NOT TO READ tasks 2 and 3,** which have not yet been used in this user study and represent possible material for further studies. I have nevertheless published these tasks here for other interested parties, and to make it easier for my future self to find them.

---

## Goals

- ask proficient Squeak/Smalltalk programmers to try out the TraceDebugger prototype:
  - collect their first impressions (surprising behaviors? learning curve?)
  - gain rough insights into UX

## Script

### Preparation

- hand out image with pre-installed TraceDebugger and source code modifications ([`bbba076`](https://github.com/LinqLover/squeak-tracedebugger/releases/tag/study-1))
- allow participants to go through Preference Wizard

### Short intro

- idea of back-in-time debugging:
  - trace method invocations + state, step through them again to see details
  - no more „stepped too far“!
- simple example:
  - debug an expression (`2 / 3`), click **trace it**
  - What is new in the UI?
    - Call tree
    - Titel: time index
    - Back button (after stepping over something)
    - Yellow button menu on call tree: spawning, jumping, finding

### Tasks

#### Task 1: JSON Parsing (easy)

Why isn‘t this string parsed correctly?

```smalltalk
WebUtils jsonFromString: '{ "foo": [ 1, 2 ], "bar": null }'. "Error: Comma expected"
```

Preparations:

- add `WebUtils class>>#jsonFromString:`
- patch `WebUtils class>>#jsonArrayFrom:` + obfuscate timestamp

#### Task 2: Regex lookbehinds (hardcore)

Why isn‘t this matching?

```smalltalk
'A' matchesRegex: '((?<=^)A)+'. "false"
```

Hint: `RxmLookaround`

Preparations:

- revert `RxMatcher>>#matchAgainstLookbehind:positive:nextLink:` to earlier timestamp

#### Task 3: Decompiler (hardcore)

Why doesn‘t the decompiled block look correctly?

```smalltalk
[^ true] decompile. "{[]}"
```

Preparations:

- revert Compiler-ct.424 (may preserve comment)

### Questions

- I like, I wish…
- greatest painpoints
- what features do you deserve?
- what was surprising to you?
- what was convenient/not so convenient?

## Outcomes

- Feature requests
  - [ ] display primitive methods in tree
  - [x] display return values in tree
  - tree navigation
    - [ ] expand all
    - [x] tooltips for all menu commands
  - [ ] stateful search
    - [ ] only display reachable signatures/classes in find menu! (2)
    - [ ] list/overview of all hits, display number of current hit
    - [ ] jump to previous hit
  - [x] run to selection
  - [ ] highlight next instruction independent of text selection (via attribute)
  - [ ] stepping slider
- Observations
  - hard to follow sender chain along tree
    - tune tree display?
    - [x] separate stack list?
    - [x] shortcuts to jump to child/sender
    - [x] shift + click to select sender at invocation
  - confusing names
    - [x] ~~spawn~~
    - [x] toggle bottom context
    - [x] jump to presence
  - [x] tracing model overwhelming/hard to learn
- Bugs
  - [x] dangling border contexts
  - [ ] error texts in inspectors are displaying incorrectly
