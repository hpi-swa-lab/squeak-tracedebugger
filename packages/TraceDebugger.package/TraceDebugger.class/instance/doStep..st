private
doStep: aBlock

	| result interruptedContext interruptedTimeIndex |
	self okToChange ifFalse: [^ false].
	self selectedContext ifNil: [^ false].
	
	result := self basicDoStep: aBlock.
	
	interruptedContext := self interruptedContext.
	interruptedTimeIndex := self cursor timeIndex.
	self selectContext: interruptedContext.
	(self selectedContext tdbIdentical: interruptedContext) ifFalse:
		[self flag: #coroutines. "The new context path may no longer contain the interrupted context at the expected position from the trace. Select it again without updating the context path."
		self cursor timeIndex: interruptedTimeIndex.
		self basicSelectContext: interruptedContext].
	
	self shrinkBorderContexts.
	
	^ result