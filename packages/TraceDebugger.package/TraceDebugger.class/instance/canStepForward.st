testing
canStepForward

	^ (self selectedContext ifNil: [^ false])
		isDead not