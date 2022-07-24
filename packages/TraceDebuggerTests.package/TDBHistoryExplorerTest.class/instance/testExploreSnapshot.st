tests
testExploreSnapshot

	| window inspector |
	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	
	explorer selectContextSlice: (self contextSliceAtPath: #(1 2 1)).
	window := self newWindow: [explorer exploreSnapshot].
	inspector := window model.
	
	self assert: inspector rootObject = #(1).
	self assert: (inspector isKindOf: TDBExplorer).