instance creation
forModel: originalModel debugger: aTraceDebugger

	^ self new
		model: originalModel;
		debugger: aTraceDebugger;
		yourself