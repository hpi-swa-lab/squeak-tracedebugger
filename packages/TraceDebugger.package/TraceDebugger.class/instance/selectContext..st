accessing - context
selectContext: aContext

	self cacheSourcesDuring:
		[self basicSelectContext: aContext.
		self changed: #treeSelectedContextPath].