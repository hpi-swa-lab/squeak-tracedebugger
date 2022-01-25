accessing
allDescendantsDo: aBlock

	self children
		do: aBlock;
		do: [:child |
			child allDescendantsDo: aBlock].