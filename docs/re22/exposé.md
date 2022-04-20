# Exposé: Leveraging object traces to improve program comprehension

## Context

In the Programming Experience Seminar in winter semester 2021/22, the first version of the [TraceDebugger](https://github.com/LinqLover/squeak-tracedebugger) has been developed that consists of a lightweight and efficient program tracing engine and a call tree-based time-travel debugging UI. With this tool, many debugging scenarios can already be accomplished more conveniently than with traditional present-only debuggers.

Still, debugging remains a mainly behavior-centric technique, and debuggers exclusively provide code-centric views on the program execution. This contradicts a large set of debugging questions that focus on the program state, for instance, when programmers are following the Whyline interaction model to trace back an infection chain. In particular, to encounter information overload caused by the implementation details of a large or unfamiliar codebase, state-centric views on the program trace could support programmers in reverse-engineering, exploring, and troubleshooting software systems.

## Goals

Our research question is: How can we improve program comprehension by leveraging object traces?

To investigate this question, we are devising the following steps to build upon the current TraceDebugger:

1. Design a query language and implement a (sufficiently efficient) interpreter for it to access the historic memory of a program trace. To implement the interpreter, create a symbolic SIMD executor for state queries by using [SimulationStudio](https://github.com/LinqLover/SimulationStudio).
2. Build views on relevant slices of the historic memory to explore prior states and side effects.
3. Integrate state-related stepping operators into the trace debugger to accelerate common navigation tasks.

## Next steps

- Research related work.
- Assemble and organize scenarios for state-based views and queries.
- Implement a prototype for the historic memory interpreter.