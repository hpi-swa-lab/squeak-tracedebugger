accessing - context
selectContext: aContext

	self cacheSourcesDuring:
		[self basicSelectContext: aContext.
		self changed: #treeSelectedContextPath.
		
		self flag: #coroutines.
		(self selectedContext tdbIdentical: aContext) ifFalse:
			[selectedContext := aContext.
			self changed: #cursorPosition]].