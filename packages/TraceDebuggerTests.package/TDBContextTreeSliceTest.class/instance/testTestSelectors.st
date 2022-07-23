tests - testing
testTestSelectors

	#(((a1 a11) (hasChildren isRoot) (hasSingleChild isLeaf))
	((a1 a11 a111 a1111) (hasChildren hasSingleChild) (isLeaf isRoot))
	((a1 a11 a112 a1121 3) (isLeaf) (hasChildren hasSingleChild isRoot))
	((a1 a11 4) (isLeaf) (hasChildren hasSingleChild isRoot)))
		tdbTuplesDo: [:path :expectedTestSelectors :unexpectedTestSelectors |
			| slice |
			slice := treeSlice atPath: path.
			
			expectedTestSelectors do: [:selector |
				self assert: (slice perform: selector)].
			unexpectedTestSelectors do: [:selector |
				self deny: (slice perform: selector)]].