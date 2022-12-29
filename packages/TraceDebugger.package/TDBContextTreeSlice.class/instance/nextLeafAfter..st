accessing - navigation
nextLeafAfter: childSliceOrNil

	| childIndex |
	childIndex := childSliceOrNil
		ifNil:
			[0]
		ifNotNil:
			[self children
				indexOf: childSliceOrNil
				ifAbsent: [self error: 'child slice not in list']].
	^ childIndex < self children size
		ifTrue:
			[(self children at: childIndex + 1) firstLeaf]
		ifFalse:
			[(self parent ifNil: [^ nil])
				nextLeafAfter: self]