menus
contextSliceKey: aCharacter from: requestor event: event

	event anyModifierKeyPressed ifFalse: [^ false]. "allow for type-to-filter"
	
	^ aCharacter
		caseOf:
			{[$i] -> [self inspectSnapshot].
			[$I] -> [self exploreSnapshot].
			[$D] -> [self debug]}
		otherwise: [false]