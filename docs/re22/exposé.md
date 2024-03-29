# Exposé: Leveraging object traces to improve program comprehension

## Context

In the Programming Experience Seminar in winter semester 2021/22, the first version of the [TraceDebugger](https://github.com/LinqLover/squeak-tracedebugger) has been developed that provides a lightweight and efficient program tracing engine and a call tree-based time-travel debugging UI. With this tool, many debugging scenarios can already be accomplished more conveniently or efficiently than with traditional present-only debuggers.

Still, the promoted debugging workflow remains mainly behavior-centric, and correspondingly, debuggers provide code-centric views only on the program execution. This contradicts a large set of debugging questions that focus on the program state, for instance, when programmers are following the Whyline interaction model to trace back an infection chain. In particular, to encounter information overload caused by the implementation details of a large or unfamiliar codebase, state-centric views on the program trace could support programmers in reverse-engineering, exploring, and troubleshooting software systems.

## Goals

Our research question is: How can we improve program comprehension by leveraging object traces and allowing programmers to explore the historic states of interesting objects?

To investigate this question, we are devising the following steps to build upon the current version of the TraceDebugger:

1. Design a programming interface and implement a (sufficiently efficient) interpreter to run queries against the historic memory of a program trace. To implement the interpreter, create a symbolic executor for state queries against a time range by using [SimulationStudio](https://github.com/LinqLover/SimulationStudio).
2. Build basic views on relevant slices of the historic memory with that users can explore prior states and side effects without diving into the underlying code base. For the beginning, we only plan to spike this step and do not invent sophisticated views or novel visualization widgets.
3. Integrate state-related stepping operators into the trace debugger to accelerate common navigation tasks.

## Challenges

- **Evaluation of state queries:** Implementing a sufficiently efficient simulator for state queries will be challenging. We plan to introduce SIMD semantics for all state-related instructions (primitives, assignments, …) to process all historic versions of state in parallel and fork the execution for each divergence in the control flow (jumps, different method dispatch, failing primitives). Side effects can be caught by using a temporary memory layer (similar to sandboxes).
  - Ranking: This will be the main implementational challenge within this semester.
- **Retracing of visual primitives:** Currently, retracing capabilities for BitBlt primitives are missing. We will need to implement temporary rematerialization of affected instances to explore the historic states of `Form`s (see [#50:~:text=TDBRetracingSimulator](https://github.com/LinqLover/squeak-tracedebugger/issues/50#:~:text=tdbretracingsimulator)).
  - Ranking: The scope of this task is well understood and it should not take more than one iteration to complete it.
- **Tool window semantics in Squeak Morphic:** As we intend to provide multiple heterogenous views on the same data (program trace), a shared cursor state between multiple windows might be helpful (see [product visions](./product-visions.md)). However, semantics for non-modal tool windows do not exist in Squeak Morphic today (even though some concepts exist in other solutions, such as the Connectors package or Vivide connectors). Deciding on a proper interaction model for cross-window synchronization and implementing the required UI changes might be challenging.
  - Ranking: This challenge does not contribute to the core RQ of this project. For the beginning, we will not implement any kind of window synchronization but stick with the existing semantics of the Squeak IDE.

## Next steps

- [ ] Research related work.
- [x] Assemble and organize scenarios for state-based views and queries.
- [ ] Sketch and implement a prototype for the historic memory interpreter.
- [ ] Design and implement a simple UI for evaluating historic queries.

## Related work

### Tooling concepts

- Babylonian programming
- State-based breakpoints
  - [Object-centric debugging](https://scholar.google.com/scholar_url?url=https://ieeexplore.ieee.org/abstract/document/6227167/&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=4967583570287376109&ei=3nVgYuDYAcLZmQHc1ovQAg&scisig=AAGBfm2m32boa2G6iCnWAJZnjZrkEwql-w) (J Ressia, A Bergel, O Nierstrasz) [Pharo]
    - breakpoints related to state (read, write) and interactions (call, creation); no back-in-time debugging
    - methods: source code instrumentation
  - [Debugging by lastChange](https://www.semanticscholar.org/paper/Debugging-by-lastChange-Mirghasemi-Barton/04310540e8ca1d905b35fa3f2230e28721b23746) (S Mirghasemi, JJ Barton, C Petitpierre) [JavaScript]
    - reevaluate program to trace relevant side effects
    - produce querypoints
    - methods: step-wise execution to querypoints
- Object flow/communication graphs
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

- Declarative Debugging
  - [Snapshot query-based debugging](https://www.researchgate.net/publication/4071313_Snapshot_query-based_debugging) (A Potanin, J Noble, R Biddle)
    - query language for analyzing object graphs in memory snaphots (stats, filtering, …)
    - paper does not explore the potential of snapshot-crossing queries
  - [JavaDD: a Declarative Debugger for Java](https://cse.buffalo.edu/tech-reports/2006-07.pdf) (HZ Girgis, B Jayaraman) [Java]
    - query language for OO events and execution history
    - prepared query catalogue
  - [Declarative and Visual Debugging in Eclipse](https://dl.acm.org/doi/10.1145/1328279.1328286) (Jive) (JK Czyz, B Jayaraman) [Java]
    - queries and views against program trace (sequence diagram, object diagram)
    - [declarative queries](https://cse.buffalo.edu/jive/tutorials/declarative_debugging.html) for historic events (assignments, method called/returned, instantiations, …)
    - methods: incremental snapshots (few space, but no efficient random access)
  - [Expositor](https://www.cs.tufts.edu/~jfoster/papers/cs-tr-5021.pdf) [Khoo2013] (C): Debugging framework for time-travel debugging and script queries, based on efficient execution trace. User interaction model: Incremental filtering and detail querying from original trace. No GUI or views
- Others
  - [Dynamic query-based debugging](https://scholar.google.com/scholar_url?url=https://link.springer.com/chapter/10.1007/3-540-48743-3_7&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=13994638883591411977&ei=jYdgYq19j5uYAaaKoIgH&scisig=AAGBfm3eSpoaPotaEwgSXNzoBhBtQ7vtPQ) (R Lencevicius, U Hölzle, AK Singh) [Java]
    - tooling for monitoring constraints; no program tracing
    - methods: code instrumentation, incremental reevaluation

### Implementation strategies

- [Temporal Data Model for Program Debugging.](https://scholar.google.com/scholar_url?url=https://citeseerx.ist.psu.edu/viewdoc/download%3Fdoi%3D10.1.1.414.7433%26rep%3Drep1%26type%3Dpdf&hl=de&sa=T&oi=gsb-ggp&ct=res&cd=0&d=10814817483712336660&ei=abRqYu-ED4b0mgGbvZC4BA&scisig=AAGBfm3VPel93CDENQ1carXGjPxZPA0e8w) (D Lessa, B Jayaraman, J Chomicki)
  - interval-based storage model of traced program state
  - point-based query interface based on SQL/TP (time-point extension for SQL); no range queries
- [Vectorization for java](https://scholar.google.com/scholar_url?url=https://link.springer.com/chapter/10.1007/978-3-642-15672-4_3&hl=de&sa=T&oi=gsb&ct=res&cd=0&d=8307434710454078148&ei=kkbTYqr9M-eUy9YPlLKEsAk&scisig=AAGBfm1spOW1gdjoTUW1UEtqejyovs1Nbw) (J Nie, B Cheng, S Li, L Wang, XF Li)
  - hardware vectorization support for Java bytecode in JVM
  - compares explicit vectorization interface (JVI) and implicit autovectorization
  - autovectorization: dependency analysis of instructions within loops and transformation to vector instructions where possible

