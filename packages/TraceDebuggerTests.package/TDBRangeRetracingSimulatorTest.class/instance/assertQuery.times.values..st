asserting
assertQuery: aBlock times: expectedTimes values: expectedValues

	| slice |
	slice := simulator evaluate: aBlock.
	self assertSlice: slice times: expectedTimes values: expectedValues.