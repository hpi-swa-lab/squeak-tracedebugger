tests
testAbandon
	"Test basic semantics of #terminateAggressively."

	| debugger x y |
	x := y := false.
	debugger := self newDebuggerOn:
		(Process forBlock: [[] ensure: [[x := true] ensure: [y := true]]]).
	
	debugger stepThrough; stepThrough; stepThrough.
	self should: debugger selectedContext willReallyStore.
	
	debugger abandon.
	self deny: x.
	self assert: y.