accessing
closure

	^ (memory
		object: object
		atTime: timeIndex
		instVarAt: 5 "closureOrNil"
		ifAbsent: [object closure])
			 tdbInMemory: memory atTime: timeIndex