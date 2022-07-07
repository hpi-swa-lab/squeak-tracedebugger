private
expandAllContextTreeSlicesAround: aBlock

	expanded addAll: contextTreeSlice withAllDescendants.
	aBlock value.
	self changed: #expandAllNodes; flag: #moveUpstream.