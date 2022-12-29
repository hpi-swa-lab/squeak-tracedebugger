instance creation
forModel: originalModel debugger: aTraceDebugger

	^ (self forModel: originalModel cursor: aTraceDebugger cursor)
		debugger: aTraceDebugger;
		yourself