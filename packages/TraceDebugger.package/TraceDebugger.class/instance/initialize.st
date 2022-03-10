initialize-release
initialize

	super initialize.
	
	self shouldReplaceInspectorsWithExplorers
		ifFalse:
			[receiverInspector := self tdbInspectorClass
				forInspector: (self receiverInspectorClass on: nil)
				debugger: self.
			receiverInspector update. "load fields for default receiver (nil)"
			contextVariablesInspector := self tdbInspectorClass
				forInspector: (self contextVariablesInspectorClass on: nil)
				debugger: self]
		ifTrue:
			[receiverInspector := self tdbExplorerClass
				forModel: (self explorerClass on: nil)
				debugger: self.
			contextVariablesInspector := self tdbExplorerClass
				forModel: (self explorerClass on: nil)
				debugger: self].