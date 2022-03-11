stepping
doStepInto
	"Step forward from the current to the next direct or indirect sendOrReturn, or to its sender if no further sendOrReturn exists."

	^ self doStepInto: self context