*TraceDebugger-UI-support
debug: aContext atTime: anotherTimeIndex

	| window debugger |
	window := self debugAtTime: anotherTimeIndex.
	debugger := window model.
	(debugger selectedContext tdbIdentical: aContext)
		ifFalse: [debugger selectContext: aContext].
	^ window