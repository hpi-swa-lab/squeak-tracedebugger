documentation
coroutines

	"Coroutines modify the context stack of an active program by adding foreign or removing existing context frames. These modifications can be made by accessing the thisContext variable in the source code and sending it messages such as #swapSender: oder #jump. For instance, coroutines are used by generators (Generator>>#next), in the Exception Handling System (Context>>#resumeEvaluating:), or in simulation code (Context>>#runSimulated:contextAtEachStep:).
	The problem with coroutines in the TraceDebugger is that they do not really fit into trace model which assumes a graph structure that in particular is a tree and append-only.
	However, since coroutines are a pretty common phenomen in modern Squeak/Smalltalk code, different hacks have been installed in the TraceDebugger in order to provide very basic and possibly inefficient support for coroutines in the sense that stepping over a coroutine send does not invalidate the entire trace. Detailed navigation through traced coroutines will naturally reveal inconsistent behaviors, though. In particular, artifically inserted context frames will be inserted into a new trace at the nearest place following a simple heuristic (see TDBTrace>>#advance). Since these hacks contradict the assumptions of the original trace model, each of them was linked to this explanation via a flag."