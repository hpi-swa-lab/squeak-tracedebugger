menus
contextSliceKey: aCharacter from: requestor event: event

	event anyModifierKeyPressed ifFalse: [^ false]. "allow for type-to-filter"
	
	^ aCharacter
		caseOf:
			{[$i] -> [self inspectSnapshot].
			[$I] -> [self exploreSnapshot].
			[$D] -> [self debug].
			
			[$J] -> [self stepBackOver].
			[$j] -> [self stepBackInto].
			[$k] -> [self stepForwardInto].
			[$K] -> [self stepForwardOver]}
		otherwise: [false]