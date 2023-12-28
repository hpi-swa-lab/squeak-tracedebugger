preferences
shouldReplaceInspectorsWithExplorers
	<preference: 'Replace inspectors with explorers in TraceDebugger'
		category: 'TraceDebugger'
		description: 'If enabled, the TraceDebugger will display hierarchical object explorers instead of conventional inspectors below the code pane. Experimental.'
		type: #Boolean>

	^ ShouldReplaceInspectorsWithExplorers ifNil: [false]