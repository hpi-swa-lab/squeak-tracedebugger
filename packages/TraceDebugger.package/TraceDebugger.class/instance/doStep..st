private
doStep: aBlock

	| result |
	self okToChange ifFalse: [^ false].
	self selectedContext ifNil: [^ false].
	
	result := aBlock ensure:
		["Update the tree structure even if the operation was interrupted."
		self changed: #cursorPosition].
	
	self selectContext: self interruptedContext.
	self selectedContext ifNil:
		[self flag: #coroutines. "The new context path may no longer contain the interrupted context at the expected position from the trace. Select it again without updating the context path."
		self basicSelectContext: self interruptedContext].
	
	^ result