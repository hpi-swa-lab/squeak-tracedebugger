*TraceDebuggerTests-UI-running
newWindow: aBlock

	| window |
	window := UIManager tdbDontAttachToCursorDuring: aBlock.
	self addTearDown: [window delete].
	^ window