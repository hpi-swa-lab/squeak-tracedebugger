tests
testCutVectorFromSideEffect

	| slice |
	slice := simulator evaluate: [object griffle: object griffle. object].
	slice := slice atTimes: (3 to: 3).
	self assertSlice: (slice collect: #griffle) times: {3 to: 3} values: #(3).