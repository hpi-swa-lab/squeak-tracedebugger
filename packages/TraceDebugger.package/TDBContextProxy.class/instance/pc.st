accessing
pc

	^ memory
		object: object
		atTime: timeIndex
		instVarAt: 2 "pc"
		ifAbsent: [object pc]