tests - accessing
testBottomContext

	#(((a1 a11) a1)
	((a1 a11 a111 a1111) a111)
	((a1 a11 a112 a1121 3) a1121)
	((a1 a11 4) a11))
		tdbTuplesDo: [:path :expectedBottomContext |
			| slice |
			slice := treeSlice atPath: path.
			
			self
				assert: expectedBottomContext
				equals: slice bottomContext].