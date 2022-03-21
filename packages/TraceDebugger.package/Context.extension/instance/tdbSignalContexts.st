*TraceDebugger-Core-accessing
tdbSignalContexts

	| ctx |
	ctx := self.
	^ Array streamContents: [:stream |
		[ctx := ctx tdbNextSignalContext]
			whileNotNil:
				[stream nextPut: ctx]]