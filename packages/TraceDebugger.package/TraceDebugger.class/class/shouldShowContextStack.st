preferences
shouldShowContextStack
	<preference: 'Show stack list in TraceDebugger'
		category: 'TraceDebugger'
		description: 'If enabled, the TraceDebugger will display a traditional call stack next to the call tree.'
		type: #Boolean>

	^ ShouldShowContextStack ifNil: [false]