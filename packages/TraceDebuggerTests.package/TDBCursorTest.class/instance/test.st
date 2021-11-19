tests
test

	| trace cursor |
	trace := self traceClass new.
	cursor := self classUnderTest on: trace.
	
	self assert: trace equals: cursor trace.
	self assert: 0 equals: cursor timeIndex.