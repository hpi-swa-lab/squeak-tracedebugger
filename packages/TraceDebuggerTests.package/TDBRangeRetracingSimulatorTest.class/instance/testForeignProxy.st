tests
testForeignProxy

	| proxy |
	simulator timeIndices: (2 to: 3).
	proxy := memory object: object atTimes: (2 to: 4) withSideEffects: nil.
	self assertQuery: [proxy griffle] values: #(3). "intersection of (2 to: 4) and (2 to: 3)"