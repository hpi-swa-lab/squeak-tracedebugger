accessing
maxTimeIndex

	^ timeInterval stop max: (self children
		ifNotEmpty: [:child | child last value maxTimeIndex]
		ifEmpty: [Float negativeInfinity])