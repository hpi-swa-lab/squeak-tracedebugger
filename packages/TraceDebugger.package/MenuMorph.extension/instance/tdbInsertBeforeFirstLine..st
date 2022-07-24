*TraceDebugger-UI-construction
tdbInsertBeforeFirstLine: aBlock

	| firstLine result start |
	start := self submorphCount.
	firstLine := self submorphs detect: [:m | m knownName = #line].
	result := aBlock value.
	self addAllMorphs: (self submorphs allButFirst: start) inFrontOf: firstLine.
	^ result