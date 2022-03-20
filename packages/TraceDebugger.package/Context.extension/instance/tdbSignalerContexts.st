*TraceDebugger-Core-accessing
tdbSignalerContexts

	| ctx |
	ctx := self.
	^ Array streamContents: [:stream |
		[ctx := ctx sender tdbNextSignalerContext]
			whileNotNil:
				[stream nextPut: ctx]]