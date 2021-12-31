testing
isDead

	^ (memory
		object: object
		atTime: timeIndex
		instVarAt: 2 "pc"
		ifAbsent: [object pc]) isNil