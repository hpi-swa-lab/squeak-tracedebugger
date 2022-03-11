copying
postCopy

	super postCopy.
	
	self model: self model copy.
	debugger := nil. "To be assigned after this operation by the sender"