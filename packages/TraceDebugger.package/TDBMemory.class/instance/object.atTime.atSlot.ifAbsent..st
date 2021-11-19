private
object: anObject atTime: timeIndex atSlot: slot ifAbsent: aBlock

	| run runs |
	timeIndex < 0
		ifTrue: [^ self error: 'timeIndex must be positive: ' , timeIndex].
	
	runs := (values at: anObject ifAbsent: [^ aBlock value])
		at: slot ifAbsent: [^ aBlock value].
	
	self flag: #optimize. "Use interpolation search (#findDelta:)"
	run := runs
		findBinary: [:ea | timeIndex - ea first]
		ifNone: [:left :right |
			left
				ifNil: [runs first]
				ifNotNil:
					[right ifNil: [^ aBlock value]]].
	^ run second