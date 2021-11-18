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
