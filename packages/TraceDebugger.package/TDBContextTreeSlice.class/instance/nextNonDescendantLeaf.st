accessing - navigation
nextNonDescendantLeaf

	^ (self parent ifNil: [^ nil])
		nextNonDescendantLeafAfter: self