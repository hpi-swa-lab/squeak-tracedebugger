private
basicSelectContext: aContext

	selectedContext := aContext.
	
	self cacheSourcesDuring:
		[self changed: #selectedContext].