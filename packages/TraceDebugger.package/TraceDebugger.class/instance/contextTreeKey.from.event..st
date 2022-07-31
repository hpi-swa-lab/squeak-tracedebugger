menus
contextTreeKey: aCharacter from: requestor event: event

	(event anyModifierKeyPressed or: [aCharacter = $ ]) ifFalse: [^ false]. "allow for type-to-filter"
	
	^ aCharacter
		caseOf:
			{[$o] -> [self spawnContext].
			[$ ] -> [self toggleBorderContext].
			[$D] -> [self jumpToPresent].
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