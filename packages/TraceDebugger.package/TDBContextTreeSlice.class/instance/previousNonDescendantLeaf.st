accessing - navigation
previousNonDescendantLeaf

	^ (self parent ifNil: [^ nil])
		previousNonDescendantLeafBefore: self