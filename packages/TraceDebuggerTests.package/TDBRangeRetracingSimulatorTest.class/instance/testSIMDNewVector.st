tests - primitives
testSIMDNewVector
	"Create a new SIMD vector that is not known to the simulator by accessing the variables. Assert that the result is partitioned by this vector anyway."

	memory object: object priorTo: 5 instVarAt: 1 "plonk" put: -1.
	simulator timeIndices: (2 to: 6).
	self
		assertQuery:
			[| result |
			result := [object plonk / (object griffle - 3)] on: ZeroDivide do: [nil].
			"Smalltalk garbageCollect".
			self flag: #gc. "Without triggering the GC, this test might be false negative"
			result]
		times: {2 to: 3. 4 to: 4. 5 to: 6}
		values: {nil. 1. -1}.