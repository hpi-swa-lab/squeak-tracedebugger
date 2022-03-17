tests
testDoLoop

	self should: [logic doLoop] notTakeMoreThan: 1 second.