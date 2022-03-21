toolbuilder - opening
openFull: aBoolean label: aStringOrNil
	"Create, schedule and answer a debugger with the given label."

	| builder |
	self borderContexts: (aBoolean ifFalse:
		[{(self interruptedContext stackOfSize: self notifierStackSize) last}]).
	
	(self interruptedContext tdbIdentical: self process suspendedContext)
			ifFalse: [self process runUntil: [:context | self interruptedContext tdbIdentical: context]].
		
	builder := ToolBuilder default.
	originalLabel := aStringOrNil.
	^ builder open: (self buildFull: aBoolean with: builder)