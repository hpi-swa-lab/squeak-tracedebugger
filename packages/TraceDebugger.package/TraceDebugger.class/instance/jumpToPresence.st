actions
jumpToPresence

	self selectContext: self interruptedContext. "ensure #doStep: can start"
	self doStep: [self cursor timeIndex: self cursor maxTimeIndex].