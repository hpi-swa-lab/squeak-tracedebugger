accessing
selectContext: aContext

	self cacheSourcesDuring:
		[| oldTreeSelectedContextPath |
		(aContext tdbIdentical: self selectedContext tdbproxyYourself)
			ifTrue: [oldTreeSelectedContextPath := self treeSelectedContextPath].
		
		self basicSelectContext: aContext.
		
		(oldTreeSelectedContextPath notNil and: [oldTreeSelectedContextPath = self treeSelectedContextPath])
			ifFalse: [self changed: #treeSelectedContextPath]].