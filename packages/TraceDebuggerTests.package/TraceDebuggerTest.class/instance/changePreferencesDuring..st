private
changePreferencesDuring: aBlock

	ContextVariablesInspector showStackVariables ifFalse:
		[thisContext wrap: [:block |
			ContextVariablesInspector showStackVariables: true.
			block ensure:
				[ContextVariablesInspector showStackVariables: false]]].
	
	^ aBlock value