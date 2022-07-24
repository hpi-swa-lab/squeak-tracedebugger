initialize-release
initialize

	super initialize.
	
	self compact: self defaultCompact.
	self relativeToParent: self defaultRelativeToParent.
	self root: #parent.