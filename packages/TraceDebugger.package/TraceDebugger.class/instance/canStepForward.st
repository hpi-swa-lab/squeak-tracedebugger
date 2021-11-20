testing
canStepForward

	^ (self selectedContext ifNil: [^ false flag: #workaround]) isDead not