initialize-release
initialize

	super initialize.
	
	receiverInspector := self inspectorClass on: nil.
	receiverInspector update. "load fields for default receiver (nil)"
	contextVariablesInspector := self contextVariablesInspectorClass on: nil.