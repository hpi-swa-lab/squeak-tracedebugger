copying
postCopy

	super postCopy.
	
	self inspector: inspector copy.
	debugger := nil.