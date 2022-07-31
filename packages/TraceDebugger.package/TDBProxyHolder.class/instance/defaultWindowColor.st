forwarding - window
defaultWindowColor

	^ (self debugger ifNil: [self traceDebuggerClass basicNew]) colorForHistory