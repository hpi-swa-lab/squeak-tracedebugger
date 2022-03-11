stepping
doStepOver
	"Step forward to the next direct sendOrReturn of the current context, or to its sender if no further sendOrReturn exists."

	^ self doStepOver: self context