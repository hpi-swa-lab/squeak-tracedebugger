accessing - navigation
previousLeafBefore: childSliceOrNil

	| childIndex |
	childIndex := childSliceOrNil
		ifNil:
			[0]
		ifNotNil:
			[self children
				indexOf: childSliceOrNil
				ifAbsent: [self error: 'child slice not in list']].
	^ childIndex > 1
		ifTrue:
			[(self children at: childIndex - 1) lastLeaf]
		ifFalse:
			[(self parent ifNil: [^ nil])
				previousLeafBefore: self]