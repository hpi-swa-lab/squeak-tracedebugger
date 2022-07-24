tests
testPrintIt

	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	
	self
		should: [explorer evaluateExpression: 'self -' requestor: nil]
		raise: SyntaxErrorNotification.
	
	self assert:
		(explorer evaluateExpression: '{yin}' requestor: nil) values
			= #((nil) (1) (2)).