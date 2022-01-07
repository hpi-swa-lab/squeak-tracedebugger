tests - accessing
testProxy

	self
		assert: object plonk equals: (memory object: object atTime: 0) plonk;
		assert: object griffle equals: (memory object: object atTime: 0) griffle.
	self assert: ((memory object: object atTime: 0) tdbIdentical: object).
	
	memory object: object priorTo: 3 atSlot: -1 put: 3. "first inst var"
	
	0 to: 2 do: [:timeIndex |
		self
			assert: 3 equals: (memory object: object atTime: timeIndex) plonk;
			assert: object griffle equals: (memory object: object atTime: timeIndex) griffle.
		self assert: ((memory object: object atTime: timeIndex) tdbIdentical: object)].
	
	self
		assert: object plonk equals: (memory object: object atTime: 4) plonk;
		assert: object griffle equals: (memory object: object atTime: 4) griffle.
	self assert: ((memory object: object atTime: 4) tdbIdentical: object).