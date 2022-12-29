tests - accessing
testTimeIndices

	#(((a1 a11) 1 4)
	((a1 a11 a111 a1111) 1 1)
	((a1 a11 a111 a1111 1) 1 1)
	((a1 a11 a112) 2 3)
	((a1 a11 a112 a1121 3) 3 3))
		tdbTuplesDo: [:path :expectedMinTimeIndex :expectedMaxTimeIndex |
			| slice |
			slice := treeSlice atPath: path.
			
			self
				assert: expectedMinTimeIndex
				equals: slice minTimeIndex.
			self
				assert: expectedMaxTimeIndex
				equals: slice maxTimeIndex].