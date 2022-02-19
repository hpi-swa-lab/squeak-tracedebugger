preferences
shouldShowContextTree
	<preference: 'Show call tree in Trace Debugger'
		category: 'Trace Debugger'
		description: 'Unless disabled, the Trace Debugger will display a rich call tree to navigate through the program trace.'
		type: #Boolean>

	^ ShouldShowContextTree ifNil: [true]