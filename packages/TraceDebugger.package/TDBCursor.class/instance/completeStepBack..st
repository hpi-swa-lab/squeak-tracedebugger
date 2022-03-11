private - stepping
completeStepBack: aContext 
	
	| start trace |
	aContext ifNil: [^ self].
	start := self context.
	start isDead ifTrue: [^ self].
	trace := self traceFor: aContext.
	
	self stepBackUntil: [:ctx "avoid #cull:" |
		| context pc |
		(pc := (context := trace contextAtTime: self timeIndex) pc) isNil
			or: [pc <= context startpc]].
	
	(self context tdbIdentical: aContext) ifTrue:
		[self stepBack].