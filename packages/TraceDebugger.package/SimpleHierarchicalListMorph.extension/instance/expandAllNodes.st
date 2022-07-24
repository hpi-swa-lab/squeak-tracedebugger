*TraceDebugger-UI-events-pseudo override
expandAllNodes

	self flag: #moveUpstream.
	self flag: #todo. "Detect cycles!"
	
	self roots
		do: [:each |
			self expandAll: each].
	self adjustSubmorphPositions.