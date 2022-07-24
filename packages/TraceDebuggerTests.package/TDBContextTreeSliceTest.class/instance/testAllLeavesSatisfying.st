tests - enumerating
testAllLeavesSatisfying

	#((())
	(((a1 a11)))
	(((a111 a1111) (a1121) (4))))
		tdbTuplesDo: [:leafPaths |
			| allLeaves |
			allLeaves := treeSlice allLeavesSatisfying: [:slice |
				leafPaths includes: slice path asArray].
			
			self
				assert: leafPaths
				equals: (allLeaves collect: [:leaf | leaf path asArray]) asArray].