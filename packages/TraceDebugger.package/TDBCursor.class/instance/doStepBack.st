stepping
doStepBack
	"Step backward to the previous direct sendOrReturn of the current context, or to its sender if no further sendOrReturn exists. This is the complement operation for #doStepOver."

	^ self doStepBack: self context