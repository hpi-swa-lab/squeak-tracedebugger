field list menu
exploreSelection

	self inspector hasSelection ifFalse: [^ self inspector changed: #flash].
	
	^ self exploreObject: self inspector selectionOrObject