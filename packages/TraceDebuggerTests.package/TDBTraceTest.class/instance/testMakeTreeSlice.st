tests
testMakeTreeSlice

	| rootTrace |
	rootTrace := self makeTrace:
		#(a 1 15
			((a1 3 5)
			(a2 7 9
				((a21 7 8)))
			(a3 10 11))).
	
	#((() ((a)) ((a)))
	((1) ((a) ((1))) ((a 1)))
	((2) ((a) ((2))) ((a 2)))
	((1 2) ((a) ((1)) ((2))) ((a) ((1)) ((2))))
	((2 3) ((a) ((2)) ((a1) ((3)))) ((a) ((2)) ((a1 3))))
	((2 6) ((a) ((2)) ((6))) ((a) ((2)) ((6))))
	((3 6) ((a) ((a1) ((3))) ((6))) ((a) ((a1 3)) ((6))))
	((8 9) ((a) ((a2) ((a21) ((8))) ((9)))) ((a a2) ((a21 8)) ((9))))
	((2 4 8 9) ((a) ((2)) ((a1) ((4))) ((a2) ((a21) ((8))) ((9)))) ((a) ((2)) ((a1 4)) ((a2) ((a21 8)) ((9))))))
		tdbTuplesDo: [:timeIndices :expectedSliceSpecUncontracted :expectedSliceSpecContracted |
			{expectedSliceSpecUncontracted. expectedSliceSpecContracted}
				with: #(false true)
				do: [:expectedSliceSpec :contract |
					| actualSlice |
					actualSlice := rootTrace makeTreeSliceForTimes: timeIndices contractPaths: contract.
					self assertSlice: actualSlice meetsSpec: expectedSliceSpec]].