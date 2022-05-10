controlling
initializeContext: aContext
	<tdbRequiredIf: #wantsToControlReads>

	| result |
	result := super initializeContext: aContext.
	
	self shouldIsolate ifTrue:
		[self addOwnObject: result].
	
	^ result