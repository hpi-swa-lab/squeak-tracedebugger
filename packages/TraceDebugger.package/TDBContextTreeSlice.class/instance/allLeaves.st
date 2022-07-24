enumerating
allLeaves

	^ Array streamContents: [:stream |
		self allLeavesDo: [:leaf | stream nextPut: leaf]]