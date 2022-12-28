copying
postCopy

	super postCopy.
	
	self model: self model copy.
	cursor := cursor. "shared"
	debugger := nil. "To be assigned after this operation by the sender"