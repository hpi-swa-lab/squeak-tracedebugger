menus
contextTreeKey: aCharacter from: requestor

	^ aCharacter
		caseOf:
			{[$o] -> [self spawn].
			[$O] -> [self toggleBottomContext].
			[$e] -> [self stepInto].
			[$t] -> [self stepOver].
			[$T] -> [self stepIntoBlock].
			[$B] -> [self stepBack].
			[$p] -> [self proceed].
			[$r] -> [self restart].
			[$w] -> [self showWhere]}
		otherwise: [self messageListKey: aCharacter from: requestor]