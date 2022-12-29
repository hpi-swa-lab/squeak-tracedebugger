tests - accessing - navigation
testNextLeaves

	#(((a1 a11) (1) nil nil nil)
	((a1 a11 a111 a1111) (1) nil (3) nil)
	((a1 a11 a111 a1111 1) (2) nil (3) nil)
	((a1 a11 a112) (2) (1) (4) (1))
	((a1 a11 a112 a1121 2) (3) (1) (3) (1))
	((a1 a11 a112 a1121 3) (4) (2) (4) (2))
	((a1 a11 4) nil (3) nil (2)))
		tdbTuplesDo: [:path :expectedNextLeafPath :expectedPreviousLeafPath :expectedNextNonDescendantLeafPath :expectedPreviousNonDescendantLeafPath |
			| slice |
			slice := treeSlice atPath: path.
			
			{{#nextLeaf. expectedNextLeafPath}.
			{#previousLeaf. expectedPreviousLeafPath}.
			{#nextNonDescendantLeaf. expectedNextNonDescendantLeafPath}.
			{#previousNonDescendantLeaf. expectedPreviousNonDescendantLeafPath}}
				tdbTuplesDo: [:sel :expectedPath |
					self
						assert: expectedPath
						equals:
							((slice perform: sel)
								ifNotNil: [:leaf | leaf path asArray])
						description: sel]].