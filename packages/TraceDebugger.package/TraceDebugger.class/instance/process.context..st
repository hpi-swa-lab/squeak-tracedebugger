initialize-release
process: aProcess context: aContext

	self setProcess: aProcess.
	
	self cursor: (self class cursorClass forContext: (aProcess suspendedContext ifNil: [aContext])).
	self cursor process: aProcess.