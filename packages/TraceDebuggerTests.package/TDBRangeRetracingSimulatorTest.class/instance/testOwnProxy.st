tests
testOwnProxy

	| proxy |
	simulator timeIndices: (3 to: 4).
	proxy := memory object: object atTimes: (3 to: 4) withSideEffects: nil.
	self assertQuery: [proxy griffle] values: #(3 2).