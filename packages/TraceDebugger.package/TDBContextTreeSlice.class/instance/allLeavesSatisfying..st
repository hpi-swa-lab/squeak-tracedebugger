enumerating
allLeavesSatisfying: isLeafBlock

	^ Array streamContents: [:stream |
		self
			allLeavesSatisfying: isLeafBlock
			do: [:leaf | stream nextPut: leaf]]