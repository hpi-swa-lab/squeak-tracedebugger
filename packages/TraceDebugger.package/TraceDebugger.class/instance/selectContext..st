accessing
selectContext: aContext

	self basicSelectContext: aContext.
	
	self changed: #treeSelectedContextPath.