# Design Process

## Design Goals

UI:

- Maximize compatibility with default Squeak Debugger (hooks)
- Maximize accessibility of traces from normal system (i.e., by replacing the default debugger via `ToolSet`/`AppRegistry`)

Framework:

- Build a general-purpose solution that does not focus too much on domain-specific knowledge, but nevertheless should be extensible for individual domains (cf. custom inspectors)

Tracing:

- transparent tracing (does not modify the original behavior)
- support incremental tracing during debugging (for performance)
- allow reconstruction of past object states
- allow reexecution from past context frame state
- efficient storage of recorded states
- embed traces into existing program stack
- support identity tracking

## Challenges

UI:

- Too large tree views: Add horizontal scroll bar, auto-scroll, spawn, maybe add mode to only display current stack

Tracing:

- Sufficient memory/execution time efficiency: optimize on demand
- Handle object identity forwarding correctly
- Collect value series efficiently
- Reevaluation – have there been partial changes of global state since the original recording?

## Related Work

### SimulationStudio

- Makes Squeak's meta-interpreter extensible
- Compatibility with default `Context` protocol, still debuggable by default debugger
- Convertability between VM-executable and simulatable stack frames

### MessageSendRecorder

- Uses *method wrappers* to record trace on granularity of message sends
- Main actors:
	- *Record*: Represents a message send. Contains method, pc, and IDs for itself and receiver that are looked up in the *recorder*. Contains *extensions* for copied arguments, return value, and custom properties. Refers to parent *record* and children *records*.
	- *Recorder*: Contains saved objects and their IDs. Refers to the top *record* and the current *record*.
	- *Browser*: Displays the current *record*. Visual similarity to default debugger, but different implementation.
- Limited state recording (e.g., no recording of stack variables, only the latest state of each receiver)

### Unstuck

- Uses *ByteSurgeon* for byte-code rewriting. Needs to be enabled for individual classes.
- Object model: *Trace* contains a tree of *events* for message sends, returns, and variable accesses.
- *State reconstruction* based on variable access events. Limited support for collections.

### Practical Back-in-time-Debugging (Lienhard)

- VM-side adjustments to the object layout

### Expositor

- "Under the hood, Expositor efficiently implements traces
as lazy, sparse interval trees whose contents \[snapshots\] are materialized on
demand."
- "Expositor" also provides a novel data structure, the
edit hash array mapped trie, which is a lazy implementation of sets,
maps, multisets, and multimaps that enables programmers to
maximize the efficiency of their debugging scripts.
- Lazy tracing: first navigate to stack frames of interest, then start tracing and cache results
- Functional API to search/filter traces

## Preliminary Architecture

- **Trace Debugger:** Shows a hierarchy of all traces under a root **trace** and displays & makes editable the current state of the **trace cursor** in detail by retrieving a **proxy object** for the context at this state.
- **Trace Cursor:** Refers to a **trace** at an **index.** Implements navigational stepping queries.
- **Trace:** Represents the trace of a stackframe, implemented by a **simulator context** which is stepped lazily. Composite. If root trace, has a **memory**. Can be forked at a specified index.
- **Memory:** Stores historic states of objects affected by the program execution in an efficients data structure (`RunArray`). Provides means to access historic states and objects.
- **Memory state:** Represents the state of a **memory** at a certain **index.**
- **Simulator context:** Stackframe that is controlled via a **simulator.**
- **Simulator:** Performs requested stepping instructions on a **simulator context.** Virtual.
- **Memory simulator:** Provides general virtual hooks to control memory access.
- **Tracing simulator:** **Memory simulator** that logs state changes to a **trace** at an **index.**
- **Retracing simulator:** **Memory simulator** that reads states from a **memory state** and signals a **retrace side effect** exception when an attempt is made to edit the memory state.
- **Retrace side effect:** Exception that is signaled from a **retracing simulator** when an attempt is made to edit its memory state. Can be resumed to overwrite the memory or to fork it.
- **Proxy object:** Transparent lazy proxy around a traced **object** at a certain **memory state.** Uses a **retracing simulator** to evaluate messages send to the underlying object. Can be rematerialized when the trace is forked.

Open issues:

- Measure overhead of separate simulator class
- Consider partial rematerialization of proxy objects rather than retracing simulator
  - might be faster
  - state management and clean-up of proxies and materializations required
  - limited compatibility between proxies and primitives
  - for manipulations, explicit scanning of materialized objects for side-effects required
  - alternatively, use deep rematerialization (compare performance)
- Discuss model of forked memories
- Discuss efficient series exploration for complex expressions. Either analyze expression for all changed objects' slots and filter memory accordingly or implement simulator with vector semantics for simultaneous evaluation against all memory states.
