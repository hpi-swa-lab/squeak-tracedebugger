figures - private
takeScreenshotWithDebugger: debuggerBlock

	| debugger window |
	debugger := TraceDebugger forBlock: [4 / 6].
	debugger stepInto.
	
	window := ToolBuilder build: debugger.
	window fullBounds.
	
	^ debuggerBlock cull: debugger cull: window