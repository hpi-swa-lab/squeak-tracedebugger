private
object: anObject atTime: timeIndex atSlot: slot ifAbsent: absentBlock
	"Answer the value at the slot in anObject at the requested timeIndex, or the result of evaluating absentBlock if no such value is present."

	| run runs |
	timeIndex >= 0
		ifFalse: [^ self error: 'timeIndex must be positive: ' , timeIndex].
	
	runs := (values at: anObject ifAbsent: [^ absentBlock value])
		at: slot ifAbsent: [^ absentBlock value].
	
	self flag: #optimize. "Inline. Use interpolation search (#findDelta:)?"
	run := runs
		findBinary: [:ea | timeIndex - ea first]
		ifNone: [:left :right |
			left
				ifNil: [runs first]
				ifNotNil:
					[right ifNil: [^ absentBlock value]]].
	^ run second