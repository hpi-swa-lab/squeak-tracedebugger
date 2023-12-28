preferences
shouldShowExceptionContexts
	<preference: 'Show exception contexts'
		category: 'TraceDebugger'
		description: 'If enabled, the context variables inspector in the bottom right corner of the TraceDebugger will display all active signaler contexts and handler actions for any exceptions on the stack.'
		type: #Boolean>

	^ ShouldShowExceptionContexts ifNil: [true]