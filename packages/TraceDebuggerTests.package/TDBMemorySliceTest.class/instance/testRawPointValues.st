tests - accessing
testRawPointValues

	| values |
	values := slice rawPointValues.
	
	self assert: {1. 1. 1. object. 3. 3} equals: values.
	self deny: (thisContext objectClass: (values at: 4)) isTdbProxyClass.