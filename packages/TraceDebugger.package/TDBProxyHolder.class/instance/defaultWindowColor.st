forwarding - window
defaultWindowColor

	^ (self debugger ifNil: [TraceDebugger basicNew]) colorForHistory