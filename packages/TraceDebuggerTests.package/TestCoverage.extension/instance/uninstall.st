*TraceDebuggerTests-Core-actions-override
uninstall
	reference actualClass methodDictionary
		at: reference methodSymbol
		put: method.
	self flag: #upstream. "Should this happen after every method dict modification?"
	reference methodSymbol flushCache. "<- TraceDebugger"