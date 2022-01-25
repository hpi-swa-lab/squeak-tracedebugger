initialize-release
context: aContext

	context := aContext.
	timeInterval := 0 to: 0.
	maxTimeIndex := 0.
	
	tracesForContexts := IdentityDictionary new.
	self noteNewDescendant: self.