stepping
doStepUntil: aBlock

	^ self doStepForward:
		[self stepUntil: aBlock]