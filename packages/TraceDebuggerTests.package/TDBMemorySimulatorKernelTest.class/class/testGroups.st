as yet unclassified
testGroups

	| groups |
	groups := super testGroups.
	
	self assert: (groups at: #ContextTest) first = #-.
	groups at: #ContextTest put: ((groups at: #ContextTest) , {
		#testCopyTo "too expensive".
		#testMessageNotUnderstood. "too expensive"}).
	
	self assert: (groups at: #FloatTest) first = #-.
	groups at: #FloatTest put: ((groups at: #FloatTest) , {
		#testFractionAsFloat. "too expensive"}).
	
	(groups at: self) ifNotEmpty:
		[self assert: (groups at: self) first ~= #-.
		groups at: self put: ((groups at: self) , {#-.
			#testExceptionHandlerAroundSimulator flag: #todo "not yet supported"})].
	
	^ groups