examples
exampleSelfSupporting
	"
	self exampleSelfSupporting
	"

	| debugger metaDebugger |
	debugger := [2 / 3] debugTrace model.
	metaDebugger := [debugger stepOver] debugTrace model.
	metaDebugger stepInto; stepThrough. "stepping over #stepOver is pretty expensive at the moment"
	metaDebugger containingWindow label: 'Meta debugger'.