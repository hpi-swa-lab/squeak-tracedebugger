accessing
detectTraceFor: aContext

	self withAllDescendantsDo: [:descendant |
		(aContext tdbIdentical: descendant originalContext)
			ifTrue: [^ descendant]].
	(KeyNotFound key: aContext) signal.