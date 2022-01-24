stepping
doRestart: aContext

	self doStepForward:
		[self timeIndex: (self traceFor: aContext) minTimeIndex.
		self stepToSendOrReturn].