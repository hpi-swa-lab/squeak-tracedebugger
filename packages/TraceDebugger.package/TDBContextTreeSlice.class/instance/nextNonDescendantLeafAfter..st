accessing - navigation
nextNonDescendantLeafAfter: childSlice

	| childIndex |
	childIndex := self children
		indexOf: childSlice
		ifAbsent: [self error: 'child slice not in list'].
	^ childIndex < self children size
		ifTrue:
			[(self children at: childIndex + 1)
				lastLeaf]
		ifFalse:
			[self nextNonDescendantLeaf]