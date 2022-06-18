tests
testSpaceUsed
	"Smoke test."

	| cursor emptyMemorySpace emptySpace emptyTraceSpace |
	cursor := self classUnderTest forContext: (Context
		sender: nil
		receiver: TDBTestLogic new
		method: TDBTestLogic >> #plonk
		arguments: #()).
	
	emptyMemorySpace := cursor memory spaceUsed.
	self assert: emptyMemorySpace < 1000.
	emptyTraceSpace := cursor memory spaceUsed.
	self assert: emptyTraceSpace < 1000.
	emptySpace := cursor spaceUsed.
	self assert: emptyMemorySpace < 1000.
	
	cursor doStepUntil: [:context | context isDead].
	
	self assert: cursor memory spaceUsed - emptyMemorySpace > (20 * 4).
	self assert: cursor memory spaceUsed < 10000.
	self assert: cursor rootTrace spaceUsed - emptyTraceSpace > (20 * 4).
	self assert: cursor spaceUsed > emptySpace.
	self assert: cursor rootTrace spaceUsed < 100000.