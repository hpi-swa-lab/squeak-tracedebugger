support
dontOpenToolsAttachedToMouseCursorDuring: aBlock

	UIManager openToolsAttachedToMouseCursor ifFalse: [^ aBlock value].
	UIManager openToolsAttachedToMouseCursor: false.
	^ aBlock ensure:
		[UIManager openToolsAttachedToMouseCursor: true]