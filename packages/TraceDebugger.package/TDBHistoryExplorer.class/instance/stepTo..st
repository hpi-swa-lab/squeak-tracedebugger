actions - navigation
stepTo: contextSliceSelector

	| nextContextSlice |
	nextContextSlice := (self selectedContextSlice ifNil: [^ self changed: #flash])
		perform: contextSliceSelector.
	nextContextSlice ifNil: [^ self changed: #flash].
	self selectContextSlice: nextContextSlice.