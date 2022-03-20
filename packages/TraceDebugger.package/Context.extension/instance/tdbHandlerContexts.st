*TraceDebugger-Core-accessing
tdbHandlerContexts

	| ctx |
	ctx := self.
	^ Array streamContents: [:stream |
		[ctx := ctx nextHandlerContext]
			whileNotNil:
				[stream nextPut: ctx]]