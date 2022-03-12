actions - process
terminateProcess

	self process terminate.
	process := nil.
	self close.