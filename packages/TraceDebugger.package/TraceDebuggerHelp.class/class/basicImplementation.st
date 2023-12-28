pages - private
basicImplementation
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicImplementation"
	<generated>
	^(HelpTopic
		title: 'Implementation'
		contents: 
'How does the TraceDebugger work?

For program tracing, the program is executed in a specialized code simulator that overrides instructions for sending messages (e.g., send, superSend) and for performing side-effects (e.g., popIntoRcvr, primitiveAtPut, push). All message sends are recorded in a tree and all changed object slots are stored in a sparse time-dependent memory structure before they are overwritten. For time-traveling, the tree is traversed using a cursor. For accessing historic objects, a proxy evaluates all messages sent to an object in another specialized simulator (retracing simulator) that emulates historic states for the requested point in time by forwarding read primitives (e.g., pushRcvr, primitiveAt) to the recorded memory. For gathering state changes in the History Explorer efficiently, the query is evaluated in a range retracing simulator with vectorization and fork semantics.

To dive into the implementation details, in addition to the package overview on GitHub, some good starting points might be the class comments in TraceDebugger and TDBCursor.

Current Limitations:
* High performance. While (sufficiently) fast enough for most small to medium workloads, tracing very compute- or mem-intensive operations may require more time (ex.: Compiler/decompiler invocation: <1s, HTTPS request: <10s, tool building: <5m, complex rendering: minutes up to hours).
* Not a dataflow analyzer: The TraceDebugger does not track dataflow events (e.g., argument passing) but only state changes.
* No tracing of external states/events for FFI/OSProcess or custom VM modules.
* No support for advanced language concepts such as identity forwarding/write barriers.!
]style[(32 1 879 80 6 55 1 3 13 1 4 9 1 25 17 269 24 101 36 43 41 44)a0b,a0,,a0,Rhttps://github.com/hpi-swa-lab/squeak-tracedebugger;,a0,LTraceDebugger Comment;,,LTraceDebugger Comment;,a0,,LTDBCursor Comment;,a0,,b,,b,,b,,b,!' readStream nextChunkText)
			key: #basicImplementation;
			shouldStyle: false;
			yourself