accessing - navigation
lastLeaf

	| lastChild |
	lastChild := (self children ifEmpty: [^ self])
		last.
	^ lastChild lastLeaf