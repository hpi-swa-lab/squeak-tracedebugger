# Improving Navigation in Debuggers with Program Traces

## Problem

Programmers often inspect systems using a debugger in order to understand their implementation, find the cause of defects, or even discover extension points for new features. However, in complex systems, usually only a small part of a program flow is relevant for a single debugging session, causing a significant overhead in programmers when they navigate to the relevant part during debugging. Programmers try to reduce this overhead by choosing a close entry point for the debugging session, but often, such entry points do not exist, or the required knowledge for narrowing the program flow is unavailable before answering the original search problem through the very intended debugging session.

> Motivating example tasks in Squeak/Smalltalk (find more examples in the [product visions](./product-visions.md)):
>
> - Find the relevant event handlers for a `MorphicEvent` that is propagated through the world.
> - Jump to the next `RxmLink` of a regular expression that causes backtracking in the matching engine.
> - Localize the text run that causes an invalidation in a `NewParagraph` during the setting inside a `TextComposer`.

## Approach

In this project, we will explore alternative debugging concepts to improve the programming experience while navigating through large program flows. These concepts will be tested out in a new debugger prototype for the Squeak/Smalltalk ecosystem. We want to untangle navigation inside the debugger from the execution semantics of the program and strengthen the data perspective on program flows by connecting our debugger to a (possibly lazily) recorded fine-granular trace of the debugged program. Based on this trace, we will provide alternative means to navigate through, filter, and segment the program flow.

Concretely, our tool should allow programmers to define measures, such as watch expressions or invariants referring to the program stack or its associated objects, and then display (differential) time series for these measures from which programmers can navigate to the original place in the program trace that, for instance, causes a value change.

Another idea we pursue refers to the localization of relevant program places by comparing multiple traces semi-automatically. For this, programmers could provide different variations in terms of the entry point, input data, or the program itself by specifying a patch to the source code or manipulating the program state dynamically.

## Impact

With this project, we hope to drive means for improving debugging experience in complex systems forward. Our goal is to build the prototype of a debugger that upgrades the existing debugging experience in Squeak/Smalltalk. This prototype should also serve as a experimentation platform for future studies regarding debugging experience. In the long term, it should be able to replace Squeak‘s built-in Debugger, which imposes non-functional requirements to our prototype with regard to the interface compatibility for integration into the base system and to the familiarity for users.

## Implementation

As a baseline, we refer to the built-in Squeak/Smalltalk debugger. In the first step, we will design a (sufficiently efficient) model for program traces and extend Squeak‘s meta-interpreter to record traces during the program execution (using SimulationStudio). In a second step, we will build a UI that presents these traces in the familiar format of Squeak‘s built-in debugger (probably reusing front-end logic from the Message Send Recorder). After that, we will enrich the data model and its presentation with new querying and filtering operations.

## Related work

Keywords: program traces, call graphs, back-in-time-debugger, dynamic analysis

- [MessageSendRecorder](https://github.com/hpi-swa/MessageSendRecorder): Message-send-based tracing tool for Squeak/Smalltalk. Limited trace granularity for sub-method-level instructions, no tracing of side-effects. No means for querying or filtering traces.
- [Babylonian](https://github.com/hpi-swa-lab/babylonian-programming-smalltalk)/[Printbugger](https://github.com/hpi-swa-lab/babylonian-programming-smalltalk/tree/a8490832b0dd33fa968143a1cbd8d0bc0e8b2405/packages/Babylonian-Printbugger.package/BPPrintbugger.class): Example-based tracing of expression probes. Strong focus on behavior; not applicable if the cause of a side-effect is unknown. Higher semantic distance between watch expressions and debugger. No means for querying or filtering traces.
- Flach, C. (2021). Call Graphs for Live Programming: Implementing Call Tracing in Babylonian/S based on a Survey of Property Extraction Techniques for Dynamic Analysis, chapter 3 (master thesis). Hasso Plattner Institute (unpublished): Overview of techniques for source code instrumentation.
- [SimulationStudio](https://github.com/LinqLover/SimulationStudio): Framework for installing extensions into Squeak‘s meta-interpreter.
- [PathFinder](https://www.hpi.uni-potsdam.de/hirschfeld/trac/SqueakCommunityProjects/wiki/path%3ApathFinder): Back-in-time debugger for navigating through test cases with incremental dynamic analysis. Limited trace granularity for sub-method-level instructions (?). Very basic filtering of stack frames by their labels, no means for querying traces. Assumes reproducible entry point.
  - [Test-driven Fault Navigation](https://www.hpi.uni-potsdam.de/hirschfeld/trac/SqueakCommunityProjects/wiki/path%3Atutorial%3Atdfn): Toolset „for debugging reproducible failures with the scientific method“ based on invariant mining, fault prediction and tracing of potential anomalies in the back-in-time debugger.
- [Multi-level Debugging](https://github.com/abstraktor/multileveldebugging-QoppaS): Perspective-dependent stack-frame filtering.
- [Moldable Debugger:](http://scg.unibe.ch/research/moldabledebugger) „Framework for developing domain-specific debuggers“, views, and operations. Basic stack-filtering. No support for back-in-time debugging.
- [Unstuck](https://de.slideshare.net/MarcusDenker/unstuck): Trace-based back-in-time debugger built upon ByteSurgeon. No filtering. Queries for events, variable accesses, message sends. Coloring of objects for tracking.
- [Practical Back-in-time-Debugging](http://scg.unibe.ch/archive/phd/lienhard-phd.pdf#practical%20back-in-time%20debugging): Optimized program trace with metadata in VM data structure.

Further related work (not applicable in Squeak):

- [Expositor](https://www.cs.tufts.edu/~jfoster/papers/cs-tr-5021.pdf) (C): Debugging framework for time-travel debugging and script queries, based on efficient execution trace. No GUI or views.
- [Dynamic Query-based Debugging of Object-oriented Programs](https://www.cs.purdue.edu/homes/xyzhang/spring07/Papers/query-debugging.pdf) (Java): Dynamic query DSL for inter-object relationships. Optimized query compilation and incremental reevaluation. No GUI or views.
- [ZStep 95](https://web.media.mit.edu/~lieber/Lieberary/ZStep/ZStep-SoftViz/ZStep-SoftViz.html) (Lisp): Back-in-time debugging based on execution traces. Behavior-oriented stepping operations. Focus on dimensions of immediacy. Tied to the domain of graphics.
- [GUI-driven code tracing](https://www.researchgate.net/publication/261442641_GUI_code_tracing_through_direct_program_interaction) (Java/Eclipse): Time-travel debugging for construction of GUI widgets. Time slider and domain-specific visualizations.
- [Debugging Reinvented: Asking and Answering Why and Why Not Questions about Program Behavior](https://faculty.washington.edu/ajko/papers/Ko2008JavaWhyline.pdf) (Java): Whyline exploration tool. Program traces with I/O history, generate visualized answer to proposed „why did“ or „why didn‘t“ questions. Tied to certain domains. Limited precision/recall for „why didn‘t“ questions with dynamic binding
- [Trace-Oriented Debugger](https://www.researchgate.net/publication/220093333_Back_to_the_Future_Omniscient_Debugging) (Java): Trace-based back-in-time debugger.