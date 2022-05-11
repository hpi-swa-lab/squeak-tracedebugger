private
changePreferencesDuring: aBlock

	ContextVariablesInspector showStackVariables ifFalse:
		[thisContext home wrap: [:block |
			ContextVariablesInspector showStackVariables: true.
			block ensure:
				[ContextVariablesInspector showStackVariables: false]]].
	TraceDebugger shouldReplaceInspectorsWithExplorers ifTrue:
		[thisContext home wrap: [:block |
			TraceDebugger shouldReplaceInspectorsWithExplorers: false.
			block ensure:
				[TraceDebugger shouldReplaceInspectorsWithExplorers: true]]].
	
	^ aBlock value