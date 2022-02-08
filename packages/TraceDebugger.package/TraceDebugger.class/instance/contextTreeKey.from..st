menus
contextTreeKey: aCharacter from: requestor

	^ aCharacter
		caseOf:
			{[$o] -> [self spawn].
			[$ ] -> [self toggleBottomContext].
			
			[$f] -> [self findContext].
			[$g] -> [self findContextAgain].
			[$F] -> [self findClass].
			[$G] -> [self findClassAgain].
		
			[$e] -> [self stepInto].
			[$t] -> [self stepOver].
			[$T] -> [self stepIntoBlock].
			[$B] -> [self stepBack].
			[$p] -> [self proceed].
			[$r] -> [self restart].
			[$w] -> [self showWhere]}
		otherwise: [self messageListKey: aCharacter from: requestor]