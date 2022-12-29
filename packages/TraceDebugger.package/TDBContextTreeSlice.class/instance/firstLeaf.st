accessing - navigation
firstLeaf

	| lastChild |
	lastChild := (self children ifEmpty: [^ self])
		first.
	^ lastChild firstLeaf