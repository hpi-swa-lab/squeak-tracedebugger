tests - enumerating
testAllLeaves

	#(((a1 a11) ((1) (2) (3) (4)))
	((a1 a11 a111 a1111) ((1)))
	((a1 a11 a112 a1121) ((2) (3))))
		tdbTuplesDo: [:path :expectedLeafPaths |
			| slice allLeaves |
			slice := treeSlice atPath: path.
			allLeaves := slice allLeaves.
			
			self
				assert: expectedLeafPaths
				equals: (allLeaves collect: [:leaf | leaf path asArray]) asArray].