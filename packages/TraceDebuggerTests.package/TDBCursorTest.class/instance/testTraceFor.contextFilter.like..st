running
testTraceFor: aContext contextFilter: filter like: spec

	| cursor |
	cursor := self classUnderTest forContext: aContext.
	
	cursor doStepUntil: [:context | context sender isNil and: [context willReturn]].
	cursor contextFilter: filter.
	
	self assertTraceIn: cursor forContext: cursor context like: spec.