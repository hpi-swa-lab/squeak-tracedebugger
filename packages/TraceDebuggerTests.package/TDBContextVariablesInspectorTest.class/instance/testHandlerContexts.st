tests
testHandlerContexts

	self denyFieldVisible: 'handler contexts'.
	
	self inspector object: self createObjectWithHandlerContext.
	
	self shouldnt: self inspector object tdbHandlerContexts isEmpty.
	self assertFieldVisible: 'handler contexts'.
	
	self should: self inspector object tdbSignalerContexts isEmpty.
	self denyFieldVisible: 'signaler contexts'.