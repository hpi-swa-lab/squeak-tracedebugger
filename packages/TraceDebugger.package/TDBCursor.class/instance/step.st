private - stepping
step

	| trace |
	trace := self trace.
	timeIndex := timeIndex + 1.
	
	self maxTimeIndex >= self timeIndex
		ifTrue: [^ self].
	
	enableSimulatorBlock ifNotNil:
		[enableSimulatorBlock value].
	
	trace advanceUntil: [:newTrace "avoid #cull:" |
		self maxTimeIndex >= self timeIndex].