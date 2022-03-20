*TraceDebugger-Core-accessing
tdbNextSignalerContext

	| ctx |
	ctx := self.
	[ctx tdbIsSignalerContext ifTrue: [^ ctx].
	(ctx := ctx sender) isNil] whileFalse.
	^ nil