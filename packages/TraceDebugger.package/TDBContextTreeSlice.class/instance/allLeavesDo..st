enumerating
allLeavesDo: aBlock

	^ self
		allLeavesSatisfying: [:leaf | leaf isLeaf]
		do: aBlock