*TraceDebugger-UI-support
exploreHistory: anObject context: aContext expression: aString

	| historyExplorer |
	historyExplorer := TDBHistoryExplorer
		forCursor: self
		object: anObject tdbproxyYourself.
	historyExplorer context: aContext.
	aString ifNotNil:
		[historyExplorer expression: aString].
	^ historyExplorer open