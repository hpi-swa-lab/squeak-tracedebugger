advancing
advance
	"Execute the next step of the receiver context and update the trace structure accordingly. ASSUMES that the receiver is the active trace, i.e., its context is a top context. Answer the trace which is active afterwards, or nil if the execution has been completed."

	| timeIndex result newRoot |
	result := context step.
	result ifNil: [^ nil].
	timeIndex := timeInterval stop + 1.
	
	result sender == context
		ifTrue: [^ self atTime: timeIndex putChild:
			(self class forContext: result parent: self timeIndex: timeIndex)
				defangUnhandledErrorIfAny].
	
	(self advancedTo: result atTime: timeIndex) ifNotNil: [:trace | ^ trace].
	
	self flag: #coroutines. "result could not be located in the trace, search the entire tree instead and insert a new trace. This is a simple workaround only and in particular violates the assumptions of #traceForContext:, but a proper representation of coroutines would require a larger design revision. Hacked."
	newRoot := (self findNearestTraceFor: result)
		ifNil: [self findNearestTraceFor: result sender].
	newRoot ifNil: [newRoot := self]. "last resort"
	^ newRoot atTime: timeIndex putChild:
		(self class forContext: result parent: newRoot timeIndex: timeIndex)
			defangUnhandledErrorIfAny