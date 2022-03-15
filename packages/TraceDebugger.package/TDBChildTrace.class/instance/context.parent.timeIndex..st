initialize-release
context: aContext parent: aTrace timeIndex: anInteger

	context := aContext.
	parent := aTrace.
	memory := aTrace memory.
	timeInterval := anInteger to: anInteger.
	maxTimeIndex := anInteger.
	
	self defangUnhandledErrorIfAny.