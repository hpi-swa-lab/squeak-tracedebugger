*TraceDebuggerTests-UI-preferences
tdbDontAttachToCursorDuring: aBlock

	self openToolsAttachedToMouseCursor ifFalse: [^ aBlock value].
	
	self openToolsAttachedToMouseCursor: false.
	^ aBlock ensure:
		[self openToolsAttachedToMouseCursor: true]