preferences
shouldShowReturnValue
	<preference: 'Show return value in context tree'
		category: 'TraceDebugger'
		description: 'If enabled, the TraceDebugger will display the return value of every traced message right to its signature in the context tree. Otherwise, this information is still available by hovering any context in the tree. Experimental, might degrade performance.'
		type: #Boolean>

	^ ShouldShowReturnValue ifNil: [false]