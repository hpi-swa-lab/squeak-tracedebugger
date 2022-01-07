private
step

	| trace |
	trace := self trace.
	timeIndex := timeIndex + 1.
	
	self maxTimeIndex >= self timeIndex
		ifTrue: [^ self].
	
	enableSimulatorBlock ifNotNil:
		[enableSimulatorBlock value].
	
	trace advanceUntil:
		[self maxTimeIndex >= self timeIndex].