advancing
advance

	| timeIndex result newRoot |
	result := context step.
	result ifNil: [^ nil].
	timeIndex := timeInterval stop + 1.
	
	result sender == context
		ifTrue: [^ self atTime: timeIndex putChild:
			(self class forContext: result parent: self timeIndex: timeIndex)].
	
	(self advancedTo: result atTime: timeIndex) ifNotNil: [:trace | ^ trace].
	
	self flag: #coroutines. "result could not be located in the trace, search the entire tree instead and insert a new trace. This is a simple workaround only and in particular violates the assumptions of #traceForContext:, but a proper representation of coroutines would require a larger design revision. Hacked."
	newRoot := (self findAnyTraceFor: result)
		ifNil: [self findAnyTraceFor: result sender].
	^ newRoot atTime: timeIndex putChild:
		(self class forContext: result parent: newRoot timeIndex: timeIndex)