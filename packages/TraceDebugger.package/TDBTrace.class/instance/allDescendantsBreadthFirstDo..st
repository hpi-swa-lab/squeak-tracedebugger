accessing - descendants
allDescendantsBreadthFirstDo: aBlock

	self children
		do: aBlock;
		do: [:child |
			child allDescendantsBreadthFirstDo: aBlock].