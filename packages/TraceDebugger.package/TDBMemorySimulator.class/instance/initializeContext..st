controlling
initializeContext: aContext
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := super initializeContext: aContext.
	
	self shouldIsolate ifTrue:
		[self addOwnObject: result].
	
	^ result