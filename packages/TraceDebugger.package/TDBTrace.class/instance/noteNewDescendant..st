private
noteNewDescendant: aTrace

	self parent ifNotNil: [:theParent | ^ theParent noteNewDescendant: aTrace].
	
	tracesForContexts at: aTrace originalContext put: aTrace.