asserting
should: aBlock send: expectedMessages

	| actualMessages result |
	actualMessages := Array streamContents: [:stream |
		result := aBlock value: [:message | stream nextPut: message]].
	self assert: expectedMessages equals: actualMessages.
	^ result