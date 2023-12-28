examples
exampleSelfSupporting
	"
	Debug a stepping operation of the TraceDebugger. Inception! (but rather slow right now)
	
	self exampleSelfSupporting
	"

	| debugger metaDebugger |
	debugger := [2 / 3] debugTrace model.
	metaDebugger := [debugger stepOver] debugTrace model.
	metaDebugger stepInto; stepThrough. "stepping over #doStepForward: is pretty expensive at the moment"
	metaDebugger label: 'Meta debugger'.