*TraceDebugger-UI-support
exploreHistory: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil

	| historyExplorer |
	historyExplorer := self
		historyExplorerOn: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil.
	historyExplorer ifNil: [^ nil].
	^ historyExplorer open