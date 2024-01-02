testing
canProceed

	self isDisplayingHistory ifTrue: [^ false].
	^ self processShouldResume