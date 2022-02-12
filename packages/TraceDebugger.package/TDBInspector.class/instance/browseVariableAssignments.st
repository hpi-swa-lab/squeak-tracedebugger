field list menu
browseVariableAssignments

	^ self selectedInstVarName
		ifNotNil: [:instVar | self systemNavigation
			browseAllStoresInto: instVar 
			from: self objectClass]
		ifNil: [self systemNavigation browseVariableAssignments: self objectClass]