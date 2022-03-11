accessing
receiver

	^ (memory
		object: object
		atTime: timeIndex
		instVarAt: 6 "receiver"
		ifAbsent: [object receiver])
			 tdbInMemory: memory atTime: timeIndex