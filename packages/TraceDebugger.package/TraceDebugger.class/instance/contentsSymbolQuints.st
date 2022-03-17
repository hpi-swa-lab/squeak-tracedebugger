accessing - code pane
contentsSymbolQuints

	self flag: #(forLater moveUpstream). "Would be nice to view decompiled code or bytecodes in debugger. See also: BytecodeDebugger.cs."
	^ super contentsSymbolQuints select: [:quint | quint first = #source]