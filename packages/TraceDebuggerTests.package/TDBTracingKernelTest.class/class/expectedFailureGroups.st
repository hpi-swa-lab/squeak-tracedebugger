accessing
expectedFailureGroups

	| groups |
	groups := super expectedFailureGroups.
	
	groups at: #ExceptionTests put: ((groups at: #ExceptionTests ifAbsent: [{}]) ,
		{#testDoubleOuterDoubleResumeTest flag: #todo. "Might have something todo with that TDBTracingSimulator ignores the complex internal structure of stack variables, see TDBTracingSimulator>>#context:step:."
		#testResumablePass flag: #todo.
		#testSimpleIsNested flag: #todo}).
	
	^ groups