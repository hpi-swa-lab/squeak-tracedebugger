tests - primitives
testPrimitiveStringReplace

	| bases |
	simulator timeIndices: (1 to: 3).
	
	bases := {{1. 2. 3. 4. 5}. {2. 3. 4. 5. 6}. {3. 4. 5. 6. 7}}.
	#(false true) do: [:shouldCopy |
		simulator
			evaluate:
				[| arrays array |
				arrays := shouldCopy ifFalse: [bases] ifTrue: [bases copy].
				array := arrays at: thisContext tdbRetracingTimeIndex.
				array
					replaceFrom: thisContext tdbRetracingTimeIndex + 1 // 2
					to: thisContext tdbRetracingTimeIndex + 2
					with: (#((0 6 7 8) (6 0 8 9 10) (6 7 0 9 10 11)) at: thisContext tdbRetracingTimeIndex)
					startingAt: thisContext tdbRetracingTimeIndex.
				self assert:
					(array =
						"figure this out yourself or believe the oracle"
						(#((0 6 7 4 5) (0 8 9 10 6) (3 0 9 10 11)) at: thisContext tdbRetracingTimeIndex))]
			on: TestResult allErrors, TestResult failure
			do: [:ex | self fail: ex].
		self assert: (bases = {{1. 2. 3. 4. 5}. {2. 3. 4. 5. 6}. {3. 4. 5. 6. 7}})].