accessing
expectedFailureGroups

	| groups |
	groups := super expectedFailureGroups.
	
	groups at: #ExceptionTests put: ((groups at: #ExceptionTests ifAbsent: [{}]) ,
		{#testResumablePass flag: #todo.
		#testSimpleIsNested flag: #todo}).
	
	groups at: #SimulationContextTest put: ((groups at: #SimulationContextTest ifAbsent: [{}]) ,
		{#testDecustomize flag: #todo}).
	
	^ groups