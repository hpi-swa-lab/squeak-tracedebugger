enumerating
allLeavesSatisfying: isLeafBlock do: leafBlock

	(isLeafBlock value: self) ifTrue: [^ leafBlock value: self].
	
	self children do: [:child |
		child allLeavesSatisfying: isLeafBlock do: leafBlock].