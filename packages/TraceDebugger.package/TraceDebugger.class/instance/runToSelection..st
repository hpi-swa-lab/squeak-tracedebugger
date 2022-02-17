actions
runToSelection: selectionInterval

	self pcRange first >= selectionInterval first ifTrue: [^ self changed: #flash].
	self doStep:
		[self cursor doStepThrough: self selectedContext until:
			[:context | (self pcRangeIn: context) first >= selectionInterval first]].