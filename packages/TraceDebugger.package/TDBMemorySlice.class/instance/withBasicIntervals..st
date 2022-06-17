copying
withBasicIntervals: newIntervals

	^ self species
		memory: memory
		basicIntervals: newIntervals
		rawValues: (newIntervals collect: [:interval | self rawAtTime: interval first])
		sideEffects: sideEffects