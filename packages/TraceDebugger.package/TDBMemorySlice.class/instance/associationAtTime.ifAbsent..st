accessing
associationAtTime: timeIndex ifAbsent: aBlock

	| index interval |
	self flag: #optimize. "inline binary search"
	index := intervals
		findBinaryIndex: [:eachInterval |
			| start |
			(start := eachInterval start) > timeIndex
				ifTrue: [timeIndex - start]
				ifFalse:
					[| stop |
					(stop := eachInterval stop) < timeIndex
						ifTrue: [timeIndex - stop]
						ifFalse:
							[interval := eachInterval.
							0]]]
		ifNone: [:left :right | ^ aBlock value].
	(interval includes: timeIndex) ifFalse: [^ aBlock value].
	^ interval -> (rawValues at: index)