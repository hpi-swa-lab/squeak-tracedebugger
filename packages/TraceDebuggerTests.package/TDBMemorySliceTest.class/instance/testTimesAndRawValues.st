tests - accessing
testTimesAndRawValues

	| timesAndValues |
	timesAndValues := slice timesAndRawValues.
	
	self assert: {(1 to: 3) -> 1. (4 to: 4) -> object. (5 to: 6) -> 3} equals: timesAndValues associations.
	self deny: (thisContext objectClass: (timesAndValues atIndex: 2) value) isTdbProxyClass.