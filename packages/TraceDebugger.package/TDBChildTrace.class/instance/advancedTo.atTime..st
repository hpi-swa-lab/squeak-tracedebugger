updating
advancedTo: aContext atTime: timeIndex

	#optimized. "Copied from superclass to avoid super send"
	context == aContext
		ifTrue:
			[timeInterval := timeInterval start to: timeIndex.
			^ self updateMaxTimeIndex: timeIndex from: self].
	
	^ self parent advancedTo: aContext atTime: timeIndex