tests
testOwnProxy

	| proxy |
	proxy := memory object: object atTime: 3.
	self assert: 3 equals: (simulator evaluate: [proxy griffle]).