private
doStepForward: aBlock
	"Schedule enablement of tracing lazily, i.e., have it been enabled once #assureTracingDuring: is sent for the first time during aBlock, and do not have it enabled if aBlock returns without sending #assureTracingDuring: at least one time. Always disable tracing before returning.
	This lazy mechanism is useful because a) enabling of tracing is expensive and b) many senders cannot know whether tracing will be actually required or aBlock will just through the already traced history."

	outerTracingContext ifNotNil:
		[^ aBlock value].
	
	outerTracingContext := thisContext.
	^ aBlock ensure: [outerTracingContext := nil]