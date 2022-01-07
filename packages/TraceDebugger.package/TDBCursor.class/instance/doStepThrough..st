stepping
doStepThrough: aContext

	self doStepForward:
		[self
			stepToHome: aContext;
			stepToSendOrReturn].