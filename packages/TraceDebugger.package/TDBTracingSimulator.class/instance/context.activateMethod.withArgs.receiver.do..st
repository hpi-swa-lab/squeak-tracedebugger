controlling
context: aContext activateMethod: aCompiledMethod withArgs: arguments receiver: receiver do: aBlock

	| result |
	result := super context: aContext activateMethod: aCompiledMethod withArgs: arguments receiver: receiver do: aBlock.
	
	memory object: result priorTo: timeIndex instVarAt: 2 "pc" put: nil. "make #isDead answer false for not-yet executed contexts"
	
	^ result