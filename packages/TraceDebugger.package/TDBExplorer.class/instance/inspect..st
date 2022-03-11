inspector compatibility
inspect: anObject

	self explore: anObject.
	self changed: #expandRootsRequested.