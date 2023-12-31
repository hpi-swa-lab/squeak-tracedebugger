accessing - context
selectAndExpandContext: aContext

	self cacheSourcesDuring:
		[self selectContext: aContext.
		
		self flag: #brittle. "if there are multiple slices with the same name..."
		self changed: #(openPath) , (self treeSelectedContextPath collect: [:context | context asString]).
		
		self flag: #coroutines.
		(self selectedContext tdbIdentical: aContext) ifFalse:
			[self selectContext: aContext]].