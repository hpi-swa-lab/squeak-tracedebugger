examples
exampleSelfSupporting
	"
	Debug a stepping operation of the trace debugger. Inception! (but rather slow right now)
	
	self exampleSelfSupporting
	"

	| debugger metaDebugger |
	debugger := [2 / 3] debugTrace model.
	metaDebugger := [debugger stepOver] debugTrace model.
	metaDebugger stepInto; stepThrough. "stepping over #doStepForward: is pretty expensive at the moment"
	metaDebugger containingWindow label: 'Meta debugger'.