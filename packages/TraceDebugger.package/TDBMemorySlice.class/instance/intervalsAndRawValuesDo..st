enumerating
intervalsAndRawValuesDo: aBlock

	^ intervals with: rawValues do: [:interval :rawValue |
		aBlock value: interval value: rawValue]