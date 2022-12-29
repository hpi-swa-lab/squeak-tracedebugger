accessing - navigation
previousNonDescendantLeafBefore: childSlice

	| childIndex |
	childIndex := self children
		indexOf: childSlice
		ifAbsent: [self error: 'child slice not in list'].
	^ childIndex > 1
		ifTrue:
			[(self children at: childIndex - 1)
				firstLeaf]
		ifFalse:
			[self previousNonDescendantLeaf]