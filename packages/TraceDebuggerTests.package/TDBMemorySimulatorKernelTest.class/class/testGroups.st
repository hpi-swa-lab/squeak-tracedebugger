accessing
testGroups

	| groups |
	groups := super testGroups.
	
	self assert: (groups at: #ContextTest) first = #-.
	groups at: #ContextTest put: ((groups at: #ContextTest) ,
		{#testCopyTo "too expensive".
		#testMessageNotUnderstood. "too expensive"}).
	
	self assert: (groups at: #FloatTest) first = #-.
	groups at: #FloatTest put: ((groups at: #FloatTest) ,
		{#testFractionAsFloat. "too expensive"}).
	
	self assert: (groups at: #SimulationContextTest) first = #-.
	groups at: #SimulationContextTest put: ((groups at: #SimulationContextTest) ,
		{#testExceptionHandlerAroundSimulator flag: #todo "not yet supported"}).
	
	^ groups