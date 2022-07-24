accessing
testGroups

	| groups |
	groups := super testGroups.
	
	self assert: (groups at: #ContextTest) first = #-.
	groups at: #ContextTest put: ((groups at: #ContextTest) ,
		{#testCopyTo "too expensive"}).
	
	self assert: (groups at: #ExceptionTests) first = #-.
	groups at: #ExceptionTests put: ((groups at: #ExceptionTests) ,
		{#testSimpleResignalVsOuter1 "too expensive"}).
	
	self assert: (groups at: #FloatTest) first = #-.
	groups at: #FloatTest put: ((groups at: #FloatTest) ,
		{#testFractionAsFloat. "too expensive"}).
	
	self assert: (groups at: #SimulationContextTest) first = #-.
	groups at: #SimulationContextTest put: ((groups at: #SimulationContextTest) ,
		{#testExceptionHandlerAroundSimulator flag: #todo "not yet supported"}).
	
	self assert: (groups includesKey: #SequenceableCollectionTest) not.
	groups at: #SequenceableCollectionTest put:
		{#testReplaceFromToWithStartingAt}.
	
	self assert: (groups at: self) first ~= #-.
	groups at: self put: ((groups at: self) copyWithoutAll:
		{#testContextRunUntilErrorOrReturnFromError flag: #todo.
		#testContextRunUntilErrorOrReturnFromNoError flag: #todo}).
	
	^ groups