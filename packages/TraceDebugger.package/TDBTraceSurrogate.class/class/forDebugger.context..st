instance creation
forDebugger: aTraceDebugger context: aContext

	^ self new
		debugger: aTraceDebugger;
		context: aContext;
		yourself