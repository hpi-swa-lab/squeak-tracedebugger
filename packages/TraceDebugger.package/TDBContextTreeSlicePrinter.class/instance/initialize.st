initialize-release
initialize

	super initialize.
	
	self compact: self defaultCompact.
	self relativeToParent: self defaultRelativeToParent.
	self root: #parent.
	self truncateLeft: self defaultTruncate.
	self truncateRight: self defaultTruncate.
	self delimiter: self defaultDelimiter.