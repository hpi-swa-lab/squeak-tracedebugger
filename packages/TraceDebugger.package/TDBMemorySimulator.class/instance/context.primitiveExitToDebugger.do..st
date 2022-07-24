primitives
context: aContext primitiveExitToDebugger: receiver do: aBlock
	<simPrimitive: 114>

	self flag: #moveUpstream. "Should be moved up to Context"
	self halt: 'primitiveExitToDebugger'.
	^ aContext push: receiver