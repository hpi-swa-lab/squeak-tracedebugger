tests
testTdbSequentiallyGroupByGather

	#((() ())
	((1 2 3 4) (1 (1) 2 (2) 0 (3) 1 (4)))
	((1 2 5 2 3 3 4 1 7 10) (1 (1) 2 (2 5 2) 0 (3 3) 1 (4 1 7 10))))
		tdbTuplesDo: [:input :expectedResults |
			| results |
			results := input
				tdbSequentiallyGroupBy: [:ea | ea \\ 3]
				gather: [:mod :values | {mod. values}].
			self assert: expectedResults equals: results asArray].