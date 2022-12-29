instance creation
forInspector: originalInspector debugger: aTraceDebugger

	^ (self forInspector: originalInspector)
		cursor: aTraceDebugger cursor;
		debugger: aTraceDebugger;
		yourself