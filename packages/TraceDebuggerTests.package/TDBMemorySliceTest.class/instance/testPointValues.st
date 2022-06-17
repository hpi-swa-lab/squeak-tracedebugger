tests - accessing
testPointValues

	| values |
	values := slice pointValues.
	
	self assert: values = {1. 1. 1. object. 3. 3}.
	self assert: 4 equals: (values at: 4) xxxtdbproxyTimeIndex.