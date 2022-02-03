private - stepping
calleeOf: aContext
	"Return the context whose sender is aContext.  Return nil if aContext is on top, or if it is not in process chain."

	| context |
	((context := self context) tdbIdentical: aContext) ifTrue: [^ nil].
	^ context findContextSuchThat: [:c | c sender == aContext]