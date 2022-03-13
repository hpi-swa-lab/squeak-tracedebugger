private - stepping
livingHomeTraceFor: aContext

	| homeTrace |
	aContext tdbLivingHomeSuchThat:
		[:ctx | (self traceFor: ctx ifAbsent: [])
			ifNil: [false]
			ifNotNil: [:trace | homeTrace := trace. true]].
	^ homeTrace ifNil: [self traceFor: aContext]