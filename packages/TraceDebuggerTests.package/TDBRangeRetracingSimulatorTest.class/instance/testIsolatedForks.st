tests
testIsolatedForks

	self
		assertQuery:
			[| x |
			thisContext tdbRetracingTimeIndex = 0
				ifTrue: [x := 1]
				ifFalse: [x := 2].
			x]
		coalescedValues: #(1 2).