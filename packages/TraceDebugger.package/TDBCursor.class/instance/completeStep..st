private - stepping
completeStep: aContext 
	"Step forward until aContext is popped or an exception is raised. Answer the next current context."

	| start trace |
	aContext ifNil: [^ nil].
	start := self context.
	start isDead ifTrue: [^ nil].
	trace := self traceFor: aContext.
	
	^ self stepUntil: [:context "avoid #cull:" |
		(trace contextAtTime: self timeIndex) isDead]