private
completeStep: aContext 
	"Run self until aContext is popped or an unhandled error is raised.  Return self's new top context, unless an unhandled error was raised then return the signaler context (rather than open a debugger)."
	
	| start trace |
	start := self context.
	start isDead ifTrue: [^ self].
	trace := self traceFor: aContext.
	
	self stepUntil:
		[(trace contextAtTime: self timeIndex) isDead].