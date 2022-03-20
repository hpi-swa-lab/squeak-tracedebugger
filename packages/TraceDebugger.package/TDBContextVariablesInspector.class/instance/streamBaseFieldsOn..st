fields - streaming
streamBaseFieldsOn: aStream

	self object ifNil: [^ self].
	aStream nextPut: self fieldSelf.
	self object actualStackSize > 0
		ifTrue: [aStream nextPut: self fieldStackTop].
	
	self shouldShowExceptionContexts ifTrue:
		[self object nextHandlerContext
			ifNotNil: [aStream nextPut: self fieldHandlerContexts].
		self object sender tdbNextSignalerContext
			ifNotNil: [aStream nextPut: self fieldSignalerContexts]].
	
	aStream nextPut: self fieldAllTempVars.