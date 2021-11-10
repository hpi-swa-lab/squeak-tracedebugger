# Product Visions

## Target group (personae)

| Persona	| Profile	| Role	| Context	| Challenges	| Goals	|
| ---	| ---	| ---	| ---	| ---	| ---	|
| **Domain expert**	| knowledge of larger parts of a system and its underyling architecture	| maintaining or extending a system	| uses the debugger to find the cause of a bug or to understand a particular aspect of the system (e.g., to extend it)	| Despite good knowledge of the system, debugging single aspects is difficult, especially if there are no fine-grained tests available. In iterative control flows, understanding of temporal-causal relationships requires intensive short-time memory.	| speed up debugging through the code base to find points of interest more efficiently	|
| **Domain learner**	| newbie to a system/slightly advanced knowledge	| improve understanding of the code base	| uses the debugger to travel through the code base and understand interconnections between parts of the system	| In systems with many actors and callbacks, navigation through the code base is difficult.	| improve overview in the debugger of different parts of the system and their interconnections	|
| **Domain outsider**	| no or very limited knowledge of the system	| look up a particular implementation detail/fix a particular bug	| uses the debugger for dynamic program slicing	| Irrelevant actors and methods are hard to ignore.	| focus on particular aspects and bugs more efficiently

## Scenarios

### Explore Morphic event handling

- **Roles:** Domain learner, domain expert
- **Goal:** Explore the relevant event handlers for a `MorphicEvent` that is propagated through the world (including composed handlers, submorphs, event filters, rejecting handlers, etc.).
- **Examples:**
  - Debug menu invocation (e.g., world menu)
  - Find all activations of capture event filter in `PluggableMenuButtonMorphTest >> handleMouseRedUp` (https://github.com/hpi-swa-lab/squeak/issues/65)
- **Problems:**
   1. Currently, this requires stepping into every *possibly relevant* detail and either viewing all methods of interest in temporal order or noting them down manually.
   2. Finding an entry point for debugging event handling is hard.
      Traditional workarounds for this problem include:
      - provide a scripted entry point manually:
        ```smalltalk
        self currentHand handleEvent: (MouseButtonEvent new setType: #mouseDown position: 50 @ 50 buttons: MouseEvent redButton hand: self currentHand)
        ```
      - set a breakpoint somewhere in the middle of the process, restart debugging from the bottom, and reset the event manually
- **Possible solutions:**
   1. :
      - display the entire trace at once
      - bookmark relevant stack frames
      - filter trace by method names/class names
      - step into details later in the context of the original event state
  2. record trace before debugging it: analogously to the profiler tool, enable system-wide tracing while performing a relevant option

### Debug Morphic layouting

- **Roles:** Domain outsider, domain expert
- **Goal:** Understand the reason for an `AssertionFailure` signaled from `#doLayoutAgain`
- **Example:** Layouting of an etoys script morph (see EToys-ct.403 and ["Etoys car example.1.cs"](https://github.com/hpi-swa-lab/squeak/issues/60#issuecomment-694497128))
- **Problems:** Narrowing down when the property `#doLayoutAgain` is added to the morph requires stepping into all details or performing a binary search by starting a new debugger whenever it was stepped too far.
- **Possible solutions:**
  - step into details later in the context of the original morph state
  - find all instructions in the trace that add the property `#doLayoutAgain`

### Explore Morphic construction/rendering

- **Roles:** Domain learner, domain expert
- **Goal:** Explore the construction/toolbuilding process or the rendering/drawing process of a complex morph
- **Examples:**
  - `ToolBuilder build: (Inspector on: #(1 2 3))`
  - `Project current world imageForm`
  - Localize the text run that causes an invalidation in a `NewParagraph` during the setting inside a `TextComposer` (see https://github.com/hpi-swa-lab/babylonian-programming-smalltalk/pull/55).
- **Problems:**
   1. Only linear stepping possible, no back-in-time display of prior construction/rendering states, no binary search to trace back certain changes to certain stack frames.
   2. Irrelevant stack frames distract understanding of the relevant process (e.g., Canvas clipping, Morph iteration).
   3. Intermediate result is hardly accessible: Need to reevaluate `aMorph imageForm` for every (relevant) step or to navigate to `aCanvas form` > "screenshot" and update the inspector manually (bug in `Form >> #=`).
- **Possible solutions:**
   1. :
      - display the entire trace at once
      - step into details later in the context of the original event state
   2. filter trace by method category/class/package
   3. similar to printbugger:
      - overview of single drawing steps of `#imageForm` (maybe sandboxed) from which the user can jump to the responsible stack frame
      - slider for efficient time-traveling (maybe fish-eye slider)

### Explore regex matching

- **Roles:** Domain learner, domain expert
- **Goals:**
  - Retrace the matching process of a string against a regular expression
  - Understand the reason for backtracking in the matching process
  - Program in the debugger to fix a bug/add a new feature and explore the updated behavior
- **Examples:**
  - Survey all sends to/invocations of `#matchAgainst:` in the matcher
  - Browse invocations of `RxMatcher >> #matchAgainstMarkerAt:nextLink:`
  - In `RxMatcher >> #matchAgainstLookbehind:positive:nextLink:`, remove a particular `#position:` send
- **Problems:**
   1. Once you missed an important detail, going back is impossible without restoring the prior state of the matcher's source stream manually.
   2. At one time, you can only see the current route of links, excluding all past/future routes before or after backtracking or checking lookaround links.
   3. After editing a method which has already been executed, the debugging session needs to be restarted and manually navigated to the previous position.
- **Possible solutions:**
   1. step into details later in the context of the original event state
   2. :
      - display the entire trace at once
      - filter stack frames by selector (e.g., `#matchAgainst:`)
      - filter stack frames by return value (e.g., `false`)
   3. different accept options in the debugger:
      - reevaluate trace and select the equivalent stack frame
      - reevaluate from the current stack frame
      - open updated trace in a new window

### Advanced: Localize the cause of a bug via comparative debugging

- **Roles:** Domain learner, domain newbie, domain expert
- **Goal:** Compare two varying program traces one of which works expected and the other one results in a bug
- **Examples:**
  - Debug Morphic event handling bug fixed in Morphic-ct.1789: Open an object explorer, copy the tree view into the world/a dialog window, and debug each a yellow button click on both tree views.
  - Debug Morphic layouting bug fixed in EToys-ct.403: Debug `Player extraExampleCar` twice, once directly and once in a separate environment with a copy of `TileMorph` that has some methods removed.

  Navigate both debuggers to the same starting point and debug both event propagations to search for a difference.
- **Problems:**
  - Need to control two debuggers simultaneously.
  - Need to compare large traces manually.
- **Possible solutions:**
  - for binary search: step into details later in the context of the original event state
  - a DualDebugger mode that allows you to apply single steps to both traces simultaneously
  - automatic comparison of traces by supplied criteria (method invocations, variables, ...) from a given starting point: highlight all differences, jump to next difference, ...
  - during the debugging session: edit variable value, fake return value, change method implementation to spawn a second trace for comparison
  - convenience: load a different patch from Squit/Monticello into a second environment for comparison

## Features

### Back-in-time debugging

- watch entire trace at once (tree view)
- step operations: into/over reverse, retry without re-evaluating
- inspect and interact with historical states of stack variables and objects
- manipulate execution to update trace or to spawn a new trace: change variable, return entered value, skip instruction, execute additional instructions, ...

### Extended navigation support

- bookmarking/labeling of stack frames?
- spawn subtree of trace in a new window?
- linear navigation history like in browsers?

### Filter/highlight contexts

- contextually:
  - by instance
  - by class
  - by selector
  - by method category
  - by system category
  - by package
- behavior:
  - changes to watch expression/variable (see [series explorer](#series-explorer))
  - (first) fulfilment of watch expression/variable
    - for efficiency: may use binary search
  - all stores into variable
    - integrate directly into inspector field menu
  - all sends to class/instance with certain argument
  - custom predicates (?)
  - all predicates should be sandboxable
- gaps between filtered methods should still be visible/explorable (maybe use highlights only?)

### Series explorer

- overview of historical values for a selected variable or watch expression
- custom representations for forms etc.
- slider and stepping buttons
- selecting a specific value selects the relevant stack frame
- optional: custom change predicate (for instance, for Forms)

### DualDebugger

- two traces in one window
- single stepping buttons and common stepping bottoms for both traces
- automatic selection of differences in the stack (maybe refinable by custom criteria)
- dual series explorer

### Background tracer

- Start/stop background tracing analogously to profiler
- Stopping the tracing will bring up a new window with the trace
- if performance is a problem: indicate method reference from where the recording should start

## Wireframes

### Debugger

![image](https://user-images.githubusercontent.com/38782922/141184561-c47130a7-ac70-4e08-ba25-2a875dbe1910.png)

![image](https://user-images.githubusercontent.com/38782922/141184632-e16855c4-8a1e-4482-9185-a16c06d8f05b.png)

### Series Explorer

![image](https://user-images.githubusercontent.com/38782922/141184497-63acda9c-6fcc-434f-8051-b56a6c48809a.png)

### Background Tracer

![image](https://user-images.githubusercontent.com/38782922/141184610-ca751f97-1c63-4098-8bb4-37b9b71137f4.png)

### DualDebugger

![image](https://user-images.githubusercontent.com/38782922/141184662-c273d32c-f6c5-49a8-9138-e9c5869443c6.png)
