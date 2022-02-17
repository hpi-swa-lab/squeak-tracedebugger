menus
contextTreeKey: aCharacter from: requestor event: event

	event anyModifierKeyPressed ifFalse: [^ false].
	
	^ aCharacter
		caseOf:
			{[$o] -> [self spawn].
			[$ ] -> [self toggleBottomContext].
			[$D] -> [self jumpToPresence].
			[$w] -> [self jumpToSender].
			[$s] -> [self jumpToCallee].
			
			[$f] -> [self findContext].
			[$g] -> [self findContextAgain].
			[$F] -> [self findClass].
			[$G] -> [self findClassAgain].
		
			[$e] -> [self stepInto].
			[$t] -> [self stepOver].
			[$T] -> [self stepThrough].
			[$B] -> [self stepBack].
			[$p] -> [self proceed].
			[$r] -> [self restart].
			[$w] -> [self showWhere]}
		otherwise: [self messageListKey: aCharacter from: requestor]