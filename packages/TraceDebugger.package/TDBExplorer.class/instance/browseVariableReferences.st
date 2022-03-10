menus
browseVariableReferences

	(self selectedClass notNil and: [self selectedClass isTrait not])
		ifTrue: [self systemNavigation browseVariableReferences: self selectedClass].