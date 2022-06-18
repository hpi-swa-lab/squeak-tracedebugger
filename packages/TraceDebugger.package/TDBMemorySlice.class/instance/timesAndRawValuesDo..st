enumerating - raw values
timesAndRawValuesDo: aBlock

	^ intervals with: rawValues do: [:interval :rawValue |
		aBlock value: interval value: rawValue]