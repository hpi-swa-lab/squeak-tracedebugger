*TraceDebugger-Core-printing
tdbPrintBlockAndSelectorOn: aStream

	closureOrNil ifNotNil:
		[aStream nextPutAll: '[] in '.
		 closureOrNil outerContext ifNotNil:
			[:outer|
			 outer tdbPrintBlockAndSelectorOn: aStream.
			 ^ self]].
	
	aStream nextPutAll: self selector.