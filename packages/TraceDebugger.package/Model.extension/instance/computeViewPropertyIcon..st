*TraceDebugger-UI-toolbuilder - private
computeViewPropertyIcon: aBlock
	
	^ self computeViewProperty: aBlock ifError: [:msg |
		[ToolIcons iconNamed: #exception] ifError: [nil]]