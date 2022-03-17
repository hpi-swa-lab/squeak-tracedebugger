private
changePreferencesDuring: aBlock

	ContextVariablesInspector showStackVariables ifFalse:
		[thisContext home wrap: [:block |
			ContextVariablesInspector showStackVariables: true.
			block ensure:
				[ContextVariablesInspector showStackVariables: false]]].
	
	^ aBlock value