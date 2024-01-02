testing
processShouldResume

	^ process isSuspended and: [process shouldResumeFromDebugger]