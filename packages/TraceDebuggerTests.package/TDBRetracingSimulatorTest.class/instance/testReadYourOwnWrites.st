tests
testReadYourOwnWrites

	self assert: 4 equals: (simulator evaluate: [object griffle: 4. object griffle]).