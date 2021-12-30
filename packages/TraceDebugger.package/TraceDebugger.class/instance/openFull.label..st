toolbuilder - opening
openFull: aBoolean label: aString
	"Create, schedule and answer a debugger with the given label."

	| builder |
	builder := ToolBuilder default.
	^ builder
		open: (self buildFull: aBoolean with: builder)
		label: (aString isEmptyOrNil
			ifFalse: ['{1}: {2}' format: {self labelString. aString}]
			ifTrue: [self labelString])