testing
canStepForward

	^ self isDisplayingHistory
		ifTrue:
			[(self selectedContext ifNil: [^ false])
				isDead not]
		ifFalse:
			[self processIsReady]