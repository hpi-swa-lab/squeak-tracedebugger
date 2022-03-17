private - stepping
completeStepBack: aContext 
	"Step backward before the start of aContext is popped or an exception is raised. Answer the previous current context."

	| start trace result |
	aContext ifNil: [^ nil].
	start := self context.
	trace := self traceFor: aContext.
	
	result := self stepBackUntil: [:ctx "avoid #cull:" |
		(trace contextAtTime: self timeIndex) isDead].
	
	(self context tdbIdentical: aContext) ifTrue:
		[result := self stepBack].
	
	^ result