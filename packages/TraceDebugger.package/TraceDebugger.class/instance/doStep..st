private - stepping
doStep: aBlock

	| result interruptedContext interruptedTimeIndex |
	self okToChange ifFalse: [^ false].
	self selectedContext ifNil: [^ false].
	
	result := self basicDoStep: aBlock.
	
	interruptedContext := self interruptedContext.
	interruptedTimeIndex := self cursor timeIndex.
	self cacheSourcesDuring:
		[self selectContext: interruptedContext.
		
		self flag: #brittle. "if there are multiple slices with the same name..."
		self changed: #(openPath) , (self treeSelectedContextPath collect: [:context | context asString]).
		
		(self selectedContext tdbIdentical: interruptedContext) ifFalse:
			[self flag: #coroutines. "Selection 'did not work'! The new context path may no longer contain the interrupted context at the expected position from the trace. Select it again without updating the context path."
			self selectContext: interruptedContext.
			self cursor timeIndex: interruptedTimeIndex.
			self basicSelectContext: interruptedContext]].
	
	self shrinkBorderContexts.
	
	^ result