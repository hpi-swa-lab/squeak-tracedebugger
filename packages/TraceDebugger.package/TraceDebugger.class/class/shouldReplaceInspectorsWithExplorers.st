preferences
shouldReplaceInspectorsWithExplorers
	<preference: 'Replace inspectors with explorers in Trace Debugger'
		category: 'Trace Debugger'
		description: 'If enabled, the Trace Debugger will display hierarchical object explorers instead of conventional inspectors below the code pane. Experimental.'
		type: #Boolean>

	^ ShouldReplaceInspectorsWithExplorers ifNil: [false]