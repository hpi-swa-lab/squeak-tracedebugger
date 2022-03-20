*TraceDebugger-Core-accessing
tdbSignalerContexts

	| ctx |
	ctx := self.
	^ Array streamContents: [:stream |
		[ctx := ctx tdbNextSignalerContext]
			whileNotNil:
				[stream nextPut: ctx]]