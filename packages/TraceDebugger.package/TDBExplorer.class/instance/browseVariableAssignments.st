menus
browseVariableAssignments

	(self selectedClass notNil and: [self selectedClass isTrait not])
		ifTrue: [self systemNavigation browseVariableAssignments: self selectedClass].