tests - accessing
testAtPath

	#((() nil nil)
	((a1 a11) (a1 a11) (a1 a11))
	((a1 a11 a111) nil (a1 a11))
	((a1 a11 a111 a1111) (a111 a1111) (a111 a1111))
	((a1 a11 a112 a1121 3) (3) (3))
	((a1 a11 4) (4) (4))
	((a1 a11 5) nil (a1 a11)))
		tdbTuplesDo: [:path :expectedResultPath :expectedMostResultPath |
			| slice mostSlice |
			slice := treeSlice atPath: path.
			expectedResultPath
				ifNil: [self assert: slice isNil]
				ifNotNil: [self assert: expectedResultPath equals: slice path asArray].
			
			mostSlice := treeSlice atMostPath: path.
			expectedMostResultPath
				ifNil: [self assert: mostSlice isNil]
				ifNotNil: [self assert: expectedMostResultPath equals: mostSlice path asArray]].