# Exposé: Leveraging object traces to improve program comprehension

## Context

In the Programming Experience Seminar in winter semester 2021/22, the first version of the [TraceDebugger](https://github.com/LinqLover/squeak-tracedebugger) has been developed that provides a lightweight and efficient program tracing engine and a call tree-based time-travel debugging UI. With this tool, many debugging scenarios can already be accomplished more conveniently or efficiently than with traditional present-only debuggers.

Still, the debugging workflow remains mainly behavior-centric, and debuggers provide code-centric views only on the program execution. This contradicts a large set of debugging questions that focus on the program state, for instance, when programmers are following the Whyline interaction model to trace back an infection chain. In particular, to encounter information overload caused by the implementation details of a large or unfamiliar codebase, state-centric views on the program trace could support programmers in reverse-engineering, exploring, and troubleshooting software systems.

## Goals

Our research question is: How can we improve program comprehension by leveraging object traces?

To investigate this question, we are devising the following steps to build upon the current version of the TraceDebugger:

1. Design a query language and implement a (sufficiently efficient) interpreter to access the historic memory of a program trace. To implement the interpreter, create a symbolic executor for state queries against a time range by using [SimulationStudio](https://github.com/LinqLover/SimulationStudio).
2. Build views on relevant slices of the historic memory with that users can explore prior states and side effects without diving into the underlying code base.
3. Integrate state-related stepping operators into the trace debugger to accelerate common navigation tasks.

## Next steps

- Research related work.
- Assemble and organize scenarios for state-based views and queries.
- Implement a prototype for the historic memory interpreter.

## Related work

- [The slice navigator: focused debugging with interactive dynamic slicing](https://ieeexplore.ieee.org/abstract/document/7789398/) (A Treffer, M Uflacker) [Java]
  - uses dynamic slicing to display previous and next steps (in an omniscient post-mortem debugger)
  - support short-term memory, highlight relevant statements, support trace navigation
  - different kinds of dependencies
  - methods: byte code instrumentation, relational database for program trace
- [Object-centric debugging](https://scholar.google.com/scholar_url?url=https://ieeexplore.ieee.org/abstract/document/6227167/&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=4967583570287376109&ei=3nVgYuDYAcLZmQHc1ovQAg&scisig=AAGBfm2m32boa2G6iCnWAJZnjZrkEwql-w) (J Ressia, A Bergel, O Nierstrasz) [Pharo]
  - breakpoints related to state (read, write) and interactions (call, creation); no back-in-time debugging
  - methods: source code instrumentation
- [Dynamic object flow analysis](https://scholar.google.com/scholar_url?url=https://boristheses.unibe.ch/1032/&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=17812052905336040217&ei=xV5hYrj0MIOEmgH1zZjACQ&scisig=AAGBfm2kqihhcn365gRCgBP2v5wwEA1lyg) (A Lienhard) [Smalltalk]
  - recording of object flow through program execution; side effect graph
  - methods: modifications to vm (memory model) for program tracing
- [PathObjects. Revealing Object Interactions to Assist Developers in Program Comprehension](https://github.com/leoschweizer/PathObjects-Thesis) (L Schweizer) [Squeak]
  - navigable object communication diagrams
  - like PathView, only applicable to re-runnable, deterministic tests
  - methods: method wrappers, object pointer analysis
- [Taking an object-centric view on dynamic information with object flow analysis](https://scholar.google.com/scholar_url?url=https://www.sciencedirect.com/science/article/pii/S1477842408000201&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=3882397383465186274&ei=snJgYvH4DZWMy9YPt8OamA0&scisig=AAGBfm0c0LZtO6oqrXrUF_WhOd_1_zLD4A) (A Lienhard, S Ducasse, T Gırba - Computer Languages, Systems & Structures, 2009) [Smalltalk]
  - graph visualization of object flows at different granularity levels
  - methods: inject object wrappers via source code instrumentation
- [Dynamic query-based debugging](https://scholar.google.com/scholar_url?url=https://link.springer.com/chapter/10.1007/3-540-48743-3_7&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=13994638883591411977&ei=jYdgYq19j5uYAaaKoIgH&scisig=AAGBfm3eSpoaPotaEwgSXNzoBhBtQ7vtPQ) (R Lencevicius, U Hölzle, AK Singh) [Java]
  - tooling for monitoring constraints; no program tracing
  - methods: code instrumentation, incremental reevaluation
- [JavaDD: a Declarative Debugger for Java](https://cse.buffalo.edu/tech-reports/2006-07.pdf) (HZ Girgis, B Jayaraman) [Java]
  - query language for OO events and execution history
  - prepared query catalogue
- [Expositor](https://www.cs.tufts.edu/~jfoster/papers/cs-tr-5021.pdf) [Khoo2013] (C): Debugging framework for time-travel debugging and script queries, based on efficient execution trace. User interaction model: Incremental filtering and detail querying from original trace. No GUI or views
