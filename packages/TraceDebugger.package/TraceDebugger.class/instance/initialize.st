initialize-release
initialize

	super initialize.
	
	receiverInspector := Inspector on: nil.
	contextVariablesInspector := ContextVariablesInspector on: nil.