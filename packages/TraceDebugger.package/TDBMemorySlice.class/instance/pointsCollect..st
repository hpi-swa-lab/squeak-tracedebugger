enumerating
pointsCollect: aBlock
	"Same semantics as #collect:, but evaluates aBlock for every single point in time instead of range retracing. Likely slower. Kept for documentary reasons only."

	^ self species
		memory: memory
		intervals: ((intervals reduce: [:someInterval :otherInterval | someInterval , otherInterval]) collect: [:ea | (ea to: ea)])
		rawValues: (self timesAndPointValuesCollect: [:timeIndex :value | (aBlock value: value) tdbproxyYourself])
		sideEffects: sideEffects