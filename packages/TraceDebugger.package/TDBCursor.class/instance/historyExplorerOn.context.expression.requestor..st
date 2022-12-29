*TraceDebugger-UI-private
historyExplorerOn: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil

	| historyExplorer |
	historyExplorer := TDBHistoryExplorer
		forCursor: self
		object: anObject tdbproxyYourself.
	historyExplorer context: aContext.
	aStringOrNil ifNotNil:
		[(historyExplorer expression: aStringOrNil requestor: requestorOrNil)
			ifFalse: [^ nil]].
	^ historyExplorer