asserting
assertQuery: aBlock times: expectedTimes values: expectedValues

	| slice |
	slice := simulator evaluate: aBlock.
	self assert: expectedTimes equals: slice times description: #times.
	self assert: slice values = expectedValues description: #values.