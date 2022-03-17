*TraceDebuggerTests-UI-running
newWindow: aBlock

	| window |
	window := aBlock value.
	self addTearDown: [window delete].
	^ window