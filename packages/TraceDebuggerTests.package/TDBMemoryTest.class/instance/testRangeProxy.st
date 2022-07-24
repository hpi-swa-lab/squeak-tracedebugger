tests - accessing
testRangeProxy

	self
		assert: {object plonk} equals: (memory object: object atTimes: (0 to: 0) collect: #plonk) pointValues;
		assert: {object griffle. object griffle} equals: (memory object: object atTimes: (0 to: 1) collect: #griffle) pointValues.
	self assert: {object plonk} equals: (memory object: object collect: #plonk) pointValues.
	self assert: ((memory object: object atTimes: (0 to: 0) collect: [:ea | ea tdbIdentical: object]) values allSatisfy: #yourself).
	self shouldRaiseError: [memory object: object atTimes: (-1 to: 0) collect: [:ea | self fail]].
	
	memory object: object priorTo: 3 instVarAt: 1 put: 3.
	
	self
		assert: {3. 3. 3. object plonk. object plonk} equals: (memory object: object atTimes: (0 to: 4) collect: #plonk) pointValues;
		assert: (Array new: 4 withAll: object griffle) equals: (memory object: object atTimes: (0 to: 3) collect: #griffle) pointValues.
	self assert: {3. 3. 3. object plonk. object plonk} equals: (memory object: object collect: #plonk) pointValues.
	self assert: ((memory object: object atTimes: (0 to: 3) collect: [:ea | ea tdbIdentical: object]) values allSatisfy: #yourself).