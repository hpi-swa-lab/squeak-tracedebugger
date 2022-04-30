enumerating
collect: aBlock

	^ self species
		memory: memory
		intervals: ((intervals reduce: [:someInterval :otherInterval | someInterval , otherInterval]) collect: [:ea | (ea to: ea)])
		rawValues: (self timesAndValuesCollect: [:timeIndex :value | (aBlock value: value) tdbproxyYourself])