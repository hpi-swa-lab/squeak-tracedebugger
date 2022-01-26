initialize-release
initialize

	super initialize.
	
	receiverInspector := self inspectorClass on: nil.
	contextVariablesInspector := self contextVariablesInspectorClass on: nil.