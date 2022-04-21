# Product Visions

## Target group (personae)

As the general use cases of debugging and system exploration remain the same, we refer to [the personae that have been identified in the previous semester](./../px21/product-visions.md#personae):

> | Persona | Profile | Role | Context | Challenges | Goals |
> | --- | --- | --- | --- | --- | --- |
> | **System expert**| knowledge of larger parts of a system and its underlying architecture | maintaining or extending a system | uses the debugger to find the cause of a bug or to understand a particular aspect of the system (e.g., to extend it) | Despite good knowledge of the system, debugging single aspects is difficult, especially if there are no fine-grained tests available. In iterative control flows, understanding of temporal-causal relationships requires intensive short-time memory. | speed up debugging through the code base to find points of interest more efficiently |
> | **System learner** | newbie to a system/slightly advanced knowledge | improve understanding of the code base | uses the debugger to travel through the code base and understand interconnections between parts of the system | In systems with many actors and callbacks, navigation through the code base is difficult. | improve overview in the debugger of different parts of the system and their interconnections |
> | **System outsider** | no or very limited knowledge of the system | look up a particular implementation detail/fix a particular bug | uses the debugger for dynamic program slicing | Irrelevant actors and methods are hard to ignore. | focus on particular aspects and bugs while minimizing distraction by other system parts |
> 
> **Note:** *Domain* knowledge is required in any case, *system* refers to the specific implementation of the domain.

However, the focus of the new state-centric views is on the **system outsider** and the **system learner** which can benefit particularly well from behavior-agnostic means of representation and navigation to shorten the process of system understanding.

## Scenarios

***Note:** Some scenarios have been adopted [from the previous semester](./../px21/product-visions.md#scenarios).*

### Explore Morphic construction/rendering/event handling

- **Roles:**
  - System expert: visualize/assure and manipulate existing mental model, good overall knowledge of the static system
  - System learner: understand the entire process; construct mental model from connections between single artifacts
  - (System outsider: efficiently look up the cause of a particular detail, needs guidance throughout system)
- **Goal:** Explore the construction/toolbuilding process, the rendering/drawing process of a complex morph, or the relevant event handlers for a `MorphicEvent`. Associate the causes in the implementation with their effects to the widget/canvas.
- **Examples:**
  - Construction: `ToolBuilder build: (Inspector on: #(1 2 3))`
  - Rendering: `Project current world imageForm`
  - Event handling: Use the `#exampleWorldCyclesFor:` tool and open the world menu
- **Problems:**
  1. To understand when a certain widget is added to the window/a certain visual primitive is drawn to the canvas/a certain event is being handled, a binary search through the program trace or an educated guess for using the „find context“ function are required. Both strategies follow the trial-and-error pattern. The binary search adds significant information overload through irrelevant implementation details (that need to be stepped through or filtered out first).
  2. To understand the order of different effects on the widget/canvas, multiple time indexes need to be viewed separately and be compared using a good short-term memory or multiple spawned windows.
  3. At the moment, it is practically impossible to view the historic state of a `Form` in any TraceDebugger inspector ([#50:~:text=TDBRetracingSimulator](https://github.com/LinqLover/squeak-tracedebugger/issues/50#:~:text=tdbretracingsimulator)).
- **Possible solutions:**
  - provide a navigable overview of all visual states of the widget/canvas under construction
  - display the historic states side-by-side with the causing context frame
  - from the submorphs list of a widget, navigate to the context frame that added this submorph
  - provide means to jump to the relevant stack frame for a selected state
  - from a visual state displayed in the TraceDebugger(‘s inspectors), directly step to the next or previous changed state
  - update spawned inspectors during stepping

### Debug Morphic rendering

*(different intentions, but similar problems to [Explore Morphic construction/rendering/event handling](#explore-morphic-constructionrenderingevent-handling)*

- **Roles:**
  - System expert: efficiently navigate to the cause of a particular detail, good overall knowledge of the static system
  - (System learner: understand the entire process)
  - System outsider: efficiently look up the cause of a particular detail, needs guidance throughout system
- **Goal:** Locate and correct a rendering bug.
- **Examples:**
  - Find the origin of the misplaced rectangle in `TraceDebugger exampleDrawingError` (revert Morphic-ct.1768).
  - Localize the text run that causes an invalidation in a `NewParagraph` during the setting inside a `TextComposer` (see [hpi-swa-lab/babylonian-programming-smalltalk#55](https://github.com/hpi-swa-lab/babylonian-programming-smalltalk/pull/55)).
- **Problems:**
  1. To understand when a certain visual primitive is drawn to the canvas, either a binary search through the program trace or an educated guess for using the „find context“ function are required. Both strategies follow the trial-and-error pattern. The binary search adds significant information overload through irrelevant implementation details (that need to be stepped through or filtered out first).
  2. At the moment, it is practically impossible to view the historic state of a `Form` in any TraceDebugger inspector ([#50:~:text=TDBRetracingSimulator](https://github.com/LinqLover/squeak-tracedebugger/issues/50#:~:text=tdbretracingsimulator)).
- **Possible solutions:**
  - provide a navigable overview of all visual states of the widget/canvas under construction
  - provide means to jump to the relevant stack frame for a selected visual state
  - from a visual state displayed in the TraceDebugger(‘s inspectors), directly step to the next or previous changed state
  - update spawned inspectors during stepping (non-snapshot inspectors)

### Debug Morphic layouting

- **Roles:**
  - System expert: already knows precisely where to search
  - (System learner: understand the entire process)
  - System outsider: nearly zero prior knowledge about the system
- **Goal:** Understand the reason for an `AssertionFailure` signaled from `#doLayoutAgain`.
- **Example:** Layouting of an etoys script morph (see EToys-ct.403 and ["Etoys car example.1.cs"](https://github.com/hpi-swa-lab/squeak/issues/60#issuecomment-694497128))
- **Problems:**
  1. Narrowing down when the property `#doLayoutAgain` is added to the morph requires a costly binary search that adds significant information overload through irrelevant implementation details (that need to be stepped through or filtered out first).
  2. The binary search does not guarantee that the property has not been removed and re-added again, which would even require a linear search.
- **Possible solutions:**
  - provide a navigable overview of all states of the morph‘s extension dictionary
  - provide means to jump to the relevant stack frame for a selected state
  - from an inspector field in the TraceDebugger, directly step to the next change/removal or previous change/addition of that field for the morph

### Understand data structures of the TraceDebugger

- **Roles:**
  - System expert: already good knowledge of data construction, explore temporally proximal behavior
  - System learner: understand semantics of data structure; understand data construction
  - System outsider: little prior system knowledge; fix a bug efficiently
- **Goal:** Understand the emergence of a `TDBMemory` instance. Establish a mental connection between single slot runs and the interpreter behavior that creates them.
- **Example:** `TraceDebugger exampleSelfSupporting`, then explore `self cursor rootTrace memory` before/after stepping.
- **Problems:**
  1. hard understandability of complex and long data structure
  2. currently, data structure needs to be re-opened from every relevant time index
  3. needle in the haystack search
- **Possible solutions:**
  - from a snapshot inspector on a state of the data structure, provide a navigable overview of all historic states (`#explorerContents`)
  - provide means to jump to the relevant stack frame for a selected state
  - display the historic states side-by-side with the causing context frame
  - attach tooltips to subsets of the viewed state to indicate their latest changing context frame („blame“)
  - narrow down the list of displayed states to state changes in a selected subset of the data structure (i.e., an entry in the `#explorerContents`)
  - in the state overview, from a selected state subset, directly step to the next or previous changed state

### Retrace regex matching

- **Roles:**
  - System expert: examine and repair/extend a matcher function in context
  - System learner: understand design and operating principle of the regex engine
  - System outsider: with little prior knowledge of the system, repair a matcher function in context
- **Goals:**
  - Why does a regular expression link not match a prefix of the input string?
  - How can we fix a bug in the matcher?
- **Example:** `'A' matchesRegex: '((?<=^)A)+'. "false"` (requires [`bug-regex-lookbehinds.1.cs`](./../../studies/1/bug-regex-lookbehinds.1.cs))
- **Problems:**
  - Cannot query state changes efficiently – need to step through many details to find out where stream position was changed again after reaching the end of stream.
- **Possible solutions:**
  - type an expression into a TraceDebugger‘s inspector and directly step to the next or previous change of its value
  - update spawned inspectors during stepping
