copying
postCopy

	super postCopy.
	
	inspector := inspector copy.
	debugger := nil.
	self flag: #todo. "We need DeepCopier to reuse the copied debugger instance!"