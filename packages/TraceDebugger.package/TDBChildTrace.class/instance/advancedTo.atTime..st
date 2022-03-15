advancing
advancedTo: aContext atTime: timeIndex

	^ (super advancedTo: aContext atTime: timeIndex)
		ifNil: [self parent advancedTo: aContext atTime: timeIndex]