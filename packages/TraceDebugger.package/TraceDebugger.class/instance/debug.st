actions - process
debug

	| notifierWindow |
	notifierWindow := self topView.
	notifierWindow model: nil. "so close won't release me."
	self breakDependents.
	notifierWindow delete.
	
	self openFull: true label:
		(notifierWindow label tdbWithoutPrefix: ('{1}: ' format: {self labelString})).