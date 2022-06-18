tests - private
testCombineArgumentsCollect

	simulator timeIndices: (1 to: 4).
	#("Empty"
	(() ())
	
	"No vectors"
	((1) (-1))
	((1 2) (-1 -2))
	((1 2 3) (-1 -2 -3))
	
	"One vector"
	(((1 1 4)) (-1))
	(((1 1 1 10 4)) ((1 (-1) 1 (-10) 4)))
	(((1 1 1 10 4) 2) ((1 (-1 -2) 1 (-10 -2) 4)))
	((1 (1 2 2 20 4)) ((1 (-1 -2) 2 (-1 -20) 4)))
	(((1 1 1 10 4) 2 3) ((1 (-1 -2 -3) 1 (-10 -2 -3) 4)))
	((1 (1 2 2 20 4) 3) ((1 (-1 -2 -3) 2 (-1 -20 -3) 4)))
	((1 2 (1 3 3 30 4)) ((1 (-1 -2 -3) 3 (-1 -2 -30) 4)))
	
	"Multiple vectors"
	(((1 1 1 10 4) (1 2 2 20 4)) ((1 (-1 -2) 1 (-10 -2) 2 (-10 -20) 4)))
	(((1 1 1 10 4) 2 (1 3 3 30 4)) ((1 (-1 -2 -3) 1 (-10 -2 -3) 3 (-10 -2 -30) 4)))
	(((1 1 1 10 4) (1 2 2 20 4) (1 3 3 30 4)) ((1 (-1 -2 -3) 1 (-10 -2 -3) 2 (-10 -20 -3) 3 (-10 -20 -30) 4))))
		tdbTuplesDo: [:argumentSpec :expectedSpec |
			| arguments expected result |
			arguments := argumentSpec collect: [:argSpec |
				argSpec isArray
					ifFalse: [argSpec]
					ifTrue: [self vectorFromSpec: argSpec]].
			expected := (expectedSpec notEmpty and: [expectedSpec first isArray])
				ifFalse: [expectedSpec]
				ifTrue: [self vectorFromSpec: expectedSpec first].
			
			result := simulator
				context: thisContext
				combineArguments: arguments
				collect: [:ea | ea negated].
			
			expected isArray
				ifTrue: [self assert: expected equals: result]
				ifFalse: [self assertSlice: result times: expected times values: expected values]].