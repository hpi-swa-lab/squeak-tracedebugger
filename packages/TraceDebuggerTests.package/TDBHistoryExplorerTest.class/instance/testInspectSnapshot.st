tests
testInspectSnapshot

	| window inspector |
	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	
	explorer selectContextSlice: (self contextSliceAtPath: #(1 2 1)).
	window := self newWindow: [explorer inspectSnapshot].
	inspector := window model.
	
	self assert: inspector object = #(1).
	self assert: (inspector isKindOf: TDBInspector).