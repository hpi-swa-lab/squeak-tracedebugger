stepping
doRestart: aContext
	"Rewind the receiver so that it halts before the first sendOrReturn of aContext."

	self doStepForward:
		[self timeIndex: (self traceFor: aContext) minTimeIndex.
		self stepToSendOrReturn].