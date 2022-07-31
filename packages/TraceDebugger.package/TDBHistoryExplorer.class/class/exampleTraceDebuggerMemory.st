examples
exampleTraceDebuggerMemory
	"Understand the TDBMemory layout by example.
	
	self exampleTraceDebuggerMemory
	"
	<timeout: 15 "seconds">

	| block |
	self flag: #coroutines. "At the moment, you cannot open a debugger from a selected result."
	
	block := [Array with: 2].
	^ self
		openDetailsForBlock: [TDBCursor traceForBlock: block]
		expression: '(self memory instVarNamed: ''values'') asString'