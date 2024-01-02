instance creation
traceForContext: aContext

	^ (self forContext: aContext)
		doStepUntil: [:ctxt |
			aContext isDead or:
				[(ctxt tdbIdentical: aContext) and:
					[aContext sender isNil and: [aContext willReturn]]]];
		timeIndex: 0;
		yourself