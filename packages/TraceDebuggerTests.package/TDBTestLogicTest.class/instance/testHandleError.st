tests
testHandleError

	self shouldnt: [logic handleError] raise: Error.
	self assert: (logic handleError first isKindOf: Error)