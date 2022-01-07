advancing
advancedTo: aContext atTime: timeIndex

	context == aContext
		ifTrue:
			[timeInterval := timeInterval start to: timeIndex.
			^ self].
	
	self parent ifNotNil: [:parentTrace |
		^ parentTrace advancedTo: aContext atTime: timeIndex].
	
	self flag: #coroutines. "For coroutines, we would need to check all earlier children, too!"
	^ nil halt