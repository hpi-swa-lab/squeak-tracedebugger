initialize-release
context: aContext parent: aTrace timeIndex: anInteger

	context := aContext.
	parent := aTrace.
	memory := aTrace memory.
	timeInterval := anInteger to: anInteger.
	
	self defangUnhandledErrorIfAny.