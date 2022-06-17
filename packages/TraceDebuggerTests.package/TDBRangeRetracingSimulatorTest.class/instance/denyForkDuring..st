asserting
denyForkDuring: simulatedBlock

	| result |
	result := simulatedBlock value.
	self assert: simulator timeIndices equals: thisContext simulator timeIndices.
	^ result