preferences
shouldShowContextTree
	<preference: 'Show call tree in TraceDebugger'
		category: 'TraceDebugger'
		description: 'Unless disabled, the TraceDebugger will display a rich call tree to navigate through the program trace.'
		type: #Boolean>

	^ ShouldShowContextTree ifNil: [true]