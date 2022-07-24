running
setUp

	super setUp.
	
	treeSlice := self makeTreeSlice:
		#((a1 a11)
			((a111 a1111)
				((1)))
			((a112)
				((a1121)
					((2))
					((3))))
			((4))).