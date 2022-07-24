tests
testDebug

	| debugger window |
	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	
	explorer selectContextSlice: (self contextSliceAtPath: #(1 2 1)).
	window := self newWindow: [explorer debug].
	debugger := window model.
	
	self assert: #yin: equals: debugger selectedContext selector.
	self assert: 1 equals: debugger selectedContext arguments first.