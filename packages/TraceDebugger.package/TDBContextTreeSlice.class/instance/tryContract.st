construction
tryContract

	self hasSingleChild ifFalse: [^ self].
	
	^ self firstChild
		prependPath: self path;
		parent: self parent;
		yourself