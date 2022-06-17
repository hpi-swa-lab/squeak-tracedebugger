tests - accessing
testTimesAndValues

	| timesAndValues |
	timesAndValues := slice timesAndValues.
	
	self assert: timesAndValues associations = {(1 to: 3) -> 1. (4 to: 4) -> object. (5 to: 6) -> 3}.
	self assert: (4 to: 4) equals: (timesAndValues atIndex: 2) value xxxtdbproxyTimeIndices.