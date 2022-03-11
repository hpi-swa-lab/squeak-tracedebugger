private - stepping
completeStepBack: aContext 
	
	| start trace |
	aContext ifNil: [^ self].
	start := self context.
	start isDead ifTrue: [^ self].
	trace := self traceFor: aContext.
	
	self stepBackUntil: [:ctx "avoid #cull:" |
		(trace contextAtTime: self timeIndex) isDead].
	
	(self context tdbIdentical: aContext) ifTrue:
		[self stepBack].