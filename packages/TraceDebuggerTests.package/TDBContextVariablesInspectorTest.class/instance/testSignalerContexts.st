tests
testSignalerContexts

	self denyFieldVisible: 'signaler contexts'.
	
	self inspector object: self createObjectWithSignalerContext.
	
	self shouldnt: self inspector object tdbSignalerContexts isEmpty.
	self assertFieldVisible: 'signaler contexts'.
	
	self should: self inspector object tdbHandlerContexts isEmpty.
	self denyFieldVisible: 'handler contexts'.