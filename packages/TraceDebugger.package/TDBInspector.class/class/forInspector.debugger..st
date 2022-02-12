instance creation
forInspector: originalInspector debugger: aTraceDebugger

	^ self new
		inspector: originalInspector;
		debugger: aTraceDebugger;
		yourself