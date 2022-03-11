stepping
doStepThrough
	"Step forward to the next direct sendOrReturn of the current context or any other block context within the method activation of the current context. If no further such sendOrReturn exists, move on to the sender of the current context."

	^ self doStepThrough: self context