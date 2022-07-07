tests
testForeignProxy

	| proxy |
	proxy := memory object: object atTime: 4.
	self assert: 3 equals: (simulator evaluate: [proxy griffle]).