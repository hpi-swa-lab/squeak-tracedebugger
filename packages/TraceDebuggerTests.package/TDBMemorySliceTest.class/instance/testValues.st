tests - accessing
testValues

	| values |
	values := slice values.
	
	self assert: values = {1. object. 3}.
	self assert: (4 to: 4) equals: (values at: 2) xxxtdbproxyTimeIndices.