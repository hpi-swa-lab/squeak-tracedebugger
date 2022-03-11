stepping
doRestart
	"Rewind the receiver so that it halts before the first sendOrReturn of the current context."

	^ self doRestart: self context