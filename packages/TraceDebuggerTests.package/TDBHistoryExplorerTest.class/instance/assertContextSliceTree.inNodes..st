asserting
assertContextSliceTree: specs inNodes: nodes

	specs = #(*) ifTrue: [^ self].
	
	self assert: specs size equals: nodes size.
	specs with: nodes do: [:spec :node |
		self assertContextSliceTree: spec inNode: node].