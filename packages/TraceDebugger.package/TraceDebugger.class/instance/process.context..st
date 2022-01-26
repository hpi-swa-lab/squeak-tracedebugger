accessing
process: aProcess context: aContext

	process := aProcess.
	self cursor: (self class cursorClass forContext: (aProcess suspendedContext ifNil: [aContext])).
	self cursor process: aProcess.