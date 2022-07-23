tests - accessing
testLeaf

	#(((a1 a11) (1) (4))
	((a1 a11 a111 a1111) (1) (1))
	((a1 a11 a112 a1121) (2) (3)))
		tdbTuplesDo: [:path :expectedFirstLeafPath :expectedLastLeafPath |
			| slice |
			slice := treeSlice atPath: path.
			
			self
				assert: expectedFirstLeafPath
				equals: slice firstLeaf path asArray.
			self
				assert: expectedLastLeafPath
				equals: slice lastLeaf path asArray].