accessing
selectContext: aContext

	selectedContext := self cursor object: aContext.
	
	self changed: #selectedContext.