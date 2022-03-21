*TraceDebugger-Core-accessing
tdbNextSignalContext

	| ctx |
	ctx := self sender.
	[ctx
		ifNil: [^ nil];
		tdbIsSignalContext]
			whileFalse: [ctx := ctx sender].
	^ ctx