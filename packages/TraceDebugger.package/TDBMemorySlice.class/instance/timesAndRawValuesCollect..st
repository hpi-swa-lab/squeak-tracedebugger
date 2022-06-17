enumerating - raw values
timesAndRawValuesCollect: aBlock

	^ intervals with: rawValues collect: [:interval :rawValue |
		aBlock value: interval value: rawValue]