tests
testSpaceUsed
	"Smoke test."

	| cursor emptyMemorySpace emptySpace emptyTraceSpace |
	cursor := self classUnderTest forContext:
		[| x |
		x := Array new: 100000]
			asContext.
	
	emptyMemorySpace := cursor memory spaceUsed.
	self assert: emptyMemorySpace < 1000.
	emptyTraceSpace := cursor memory spaceUsed.
	self assert: emptyTraceSpace < 1000.
	emptySpace := cursor spaceUsed.
	self assert: emptyMemorySpace < 1000.
	
	cursor doStepUntil: [:context | context willReallyStore].
	
	self assert: cursor memory spaceUsed  - emptyMemorySpace > (20 * 5).
	self assert: cursor memory spaceUsed < 2000.
	self assert: cursor rootTrace spaceUsed - emptyTraceSpace > (20 * 4).
	self assert: cursor spaceUsed > emptySpace.
	self assert: cursor rootTrace spaceUsed < 1000.
	
	cursor doStepUntil: [:context | false].
	
	self assert: cursor memory spaceUsed  - emptyMemorySpace > (100000 * 8).