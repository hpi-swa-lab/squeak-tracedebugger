accessing - context
selectAndExpandContext: aContext

	self cacheSourcesDuring:
		[self selectContext: aContext.
		self changed: #(openPath) , (self treeSelectedContextPath collect: [:context | context asString])].