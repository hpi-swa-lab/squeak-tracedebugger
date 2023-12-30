accessing - context
selectAndExpandContext: aContext

	self cacheSourcesDuring:
		[self selectContext: aContext.
		self changed: #(openPath) , (self treeSelectedContextPath collect: [:context | context asString]).
		self flag: #coroutines.
		(self selectedContext tdbIdentical: aContext) ifFalse:
			[selectedContext := aContext.
			self changed: #cursorPosition]].