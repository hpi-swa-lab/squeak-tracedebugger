accessing
home

	^ object home
		tdbInMemory: memory
		atTime: timeIndex
		withSideEffects: sideEffects