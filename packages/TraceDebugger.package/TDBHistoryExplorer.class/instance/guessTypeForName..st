Autocompletion
guessTypeForName: aString 

	| types |
	types := (self cursor object: self object collect: [:ea |
		(self auxiliaryInspectorOn: ea) guessTypeForName: aString])
			values asSet.
	types := types copyWithout: nil class.
	^ (Smalltalk classNamed: #ECContext) new findCommonSuperclass: types asArray