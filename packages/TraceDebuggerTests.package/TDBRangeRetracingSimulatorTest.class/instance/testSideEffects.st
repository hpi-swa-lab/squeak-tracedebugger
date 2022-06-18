tests
testSideEffects

	| result |
	result := simulator evaluate: [object griffle: 4; griffle].
	self deny: (simulator sideEffects includesObject: object).
	self assert: #(4) equals: result values.
	self assert: (result sideEffects first includesObject: object).