private
scanForTime: timeIndex

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
		ifNone: [:left :right | ^ 0].
	(interval includes: timeIndex) ifFalse: [^ 0].
	^ index