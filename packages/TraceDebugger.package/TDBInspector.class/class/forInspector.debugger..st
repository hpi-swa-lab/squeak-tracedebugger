instance creation
forInspector: originalInspector debugger: aTraceDebugger

	^ (self forInspector: originalInspector)
		debugger: aTraceDebugger;
		yourself