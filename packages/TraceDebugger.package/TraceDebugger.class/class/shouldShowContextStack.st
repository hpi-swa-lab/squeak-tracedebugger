preferences
shouldShowContextStack
	<preference: 'Show stack list in Trace Debugger'
		category: 'Trace Debugger'
		description: 'If enabled, the Trace Debugger will display a traditional call stack next to the call tree.'
		type: #Boolean>

	^ ShouldShowContextStack ifNil: [false]