support
openDebuggerForBlock: aBlock

	debugger := self debuggerClass forBlock: aBlock.
	window := self dontOpenToolsAttachedToMouseCursorDuring:
		[debugger open].
	self displayWindow.