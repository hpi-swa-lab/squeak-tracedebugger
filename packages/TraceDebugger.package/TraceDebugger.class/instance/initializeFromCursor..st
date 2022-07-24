initialize-release
initializeFromCursor: aCursor

	self cursor: aCursor.
	self cursor process ifNil:
		[aCursor process:
			((Process forContext: aCursor rootTrace originalContext)
				name: ('helper process for a {1}' format: {aCursor class});
				shouldResumeFromDebugger: false;
				yourself)].
	self setProcess: self cursor process.
	
	self selectContext: self cursor context.