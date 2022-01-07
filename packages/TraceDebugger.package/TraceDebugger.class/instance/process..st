accessing
process: aProcess

	process := aProcess.
	self cursor: (self class cursorClass forContext: aProcess suspendedContext).
	self cursor process: aProcess.