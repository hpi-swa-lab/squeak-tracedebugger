tests - private
testTimeRange

	"negative time indices not allowed"
	self
		should:
			[memory object: object atTime: -1 atSlot: #plonk ifAbsent: [#nurp]]
		raise: Error.
	
	memory object: object priorTo: 2 atSlot: #plonk put: #wiffy.
	
	"historic memory is sealed"
	self
		should:
			[memory object: object priorTo: 1 atSlot: #plonk put: #ziffy]
		raise: Error.
	
	"prior to entry"
	self
		assert: #wiffy equals: (memory object: object atTime: 0 atSlot: #plonk ifAbsent: [#nurp]);
		assert: #wiffy equals: (memory object: object atTime: 1 atSlot: #plonk ifAbsent: [#nurp]).
	
	"positive future indices fall back to absentBlock"
	self
		assert: #nurp equals: (memory object: object atTime: 2 atSlot: #plonk ifAbsent: [#nurp]);
		assert: #nurp equals: (memory object: object atTime: 3 atSlot: #plonk ifAbsent: [#nurp]).