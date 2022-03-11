stepping
doStepThrough: aContext
	"Step forward to the next direct sendOrReturn of aContext or any other block context within the method activation of aContext. If no further such sendOrReturn exists, move on to the sender of the current context."

	self doStepForward:
		[self
			stepToHome: aContext;
			stepToSendOrReturn].