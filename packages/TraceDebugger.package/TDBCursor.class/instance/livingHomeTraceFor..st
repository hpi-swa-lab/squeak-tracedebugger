private
livingHomeTraceFor: aContext

	| homeContext |
	homeContext := aContext tdbLivingHomeSuchThat:
		[:ctx | (self traceFor: ctx ifAbsent: []) notNil].
	^ homeContext
		ifNotNil: [self traceFor: homeContext]
		ifNil: [self traceFor: aContext]