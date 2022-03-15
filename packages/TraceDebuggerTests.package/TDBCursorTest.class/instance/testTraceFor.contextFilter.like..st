running
testTraceFor: aContext contextFilter: filter like: spec

	| cursor |
	cursor := self classUnderTest forContext: aContext.
	
	cursor doStepUntil: [:context | context isDead].
	cursor contextFilter: filter.
	
	self assertTraceIn: cursor forContext: cursor context like: spec.