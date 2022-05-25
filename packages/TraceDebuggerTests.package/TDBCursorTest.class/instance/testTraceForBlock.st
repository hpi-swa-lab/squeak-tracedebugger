tests - trace
testTraceForBlock

	| cursor logic result |
	logic := TDBTestLogic new.
	
	cursor := self classUnderTest traceForBlock: [result := logic wiffy].
	
	self assert: logic wiffy equals: result.
	self assert: (cursor context home tdbIdentical: thisContext home).
	self assert: cursor timeIndex < cursor maxTimeIndex.