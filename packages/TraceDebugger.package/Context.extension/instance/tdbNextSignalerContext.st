*TraceDebugger-Core-accessing
tdbNextSignalerContext

	| ctx |
	ctx := self sender.
	[ctx
		ifNil: [^ nil];
		tdbIsSignalerContext]
			whileFalse: [ctx := ctx sender].
	^ ctx