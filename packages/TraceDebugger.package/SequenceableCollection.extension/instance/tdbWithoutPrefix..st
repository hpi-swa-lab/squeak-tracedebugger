*TraceDebugger-Core-copying
tdbWithoutPrefix: prefix

	(self beginsWith: prefix)
		ifFalse: [^ self].
	^ self allButFirst: prefix size