private - stepping
basicStep
	"Increment the time index and advance the trace as far as neccessary."

	| trace |
	trace := self trace.
	timeIndex := timeIndex + 1.
	
	self maxTimeIndex >= self timeIndex
		ifTrue: [^ self].
	
	^ self assureTracingDuring:
		[(trace advanceUntil: [:newTrace "avoid #cull:" |
			self maxTimeIndex >= self timeIndex])]