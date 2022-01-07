*TraceDebugger-Core-accessing
tdbHasHome: aContext

	self == aContext ifTrue: [^ true].
	closureOrNil ifNil: [^ false].
	^ closureOrNil outerContext tdbHasHome: aContext