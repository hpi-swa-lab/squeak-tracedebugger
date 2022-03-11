testing
canProceed

	self isDisplayingHistory ifTrue: [^ false].
	^ process isSuspended and: [process shouldResumeFromDebugger]