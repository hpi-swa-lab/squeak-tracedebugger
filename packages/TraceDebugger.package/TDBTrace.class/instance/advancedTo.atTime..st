advancing
advancedTo: aContext atTime: timeIndex
	"Scan the receiver along the parent chain up to the root until the trace for aContext is found. If a matching trace is found, update its time index. If no trace is found, answer nil."

	context == aContext
		ifTrue:
			[timeInterval := timeInterval start to: timeIndex.
			^ self updateMaxTimeIndex: timeIndex from: self].
	
	self parent ifNotNil: [:parentTrace |
		^ parentTrace advancedTo: aContext atTime: timeIndex].
	
	^ nil