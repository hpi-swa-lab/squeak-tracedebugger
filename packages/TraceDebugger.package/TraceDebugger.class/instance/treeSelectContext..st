accessing - toolbuilder
treeSelectContext: aContext

	self basicSelectContext:
		(self cursor object: aContext).
	self changed: #treeSelectedContext.