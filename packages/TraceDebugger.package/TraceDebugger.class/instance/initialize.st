initialize-release
initialize

	super initialize.
	
	receiverInspector := self tdbInspectorClass
		forInspector: (self receiverInspectorClass on: nil)
		debugger: self.
	receiverInspector update. "load fields for default receiver (nil)"
	contextVariablesInspector := self tdbInspectorClass
		forInspector: (self contextVariablesInspectorClass on: nil)
		debugger: self.