*TraceDebugger-UI-support
exploreHistory: anObject context: aContext expression: aStringOrNil

	| historyExplorer |
	historyExplorer := TDBHistoryExplorer
		forCursor: self
		object: anObject tdbproxyYourself.
	historyExplorer context: aContext.
	aStringOrNil ifNotNil:
		[historyExplorer expression: aStringOrNil].
	^ historyExplorer open