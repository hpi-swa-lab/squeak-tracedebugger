Autocompletion
guessTypeForName: aString 

	| index object |
	index := (self selectedContext debuggerMap tempNamesForContext: self selectedContext)
		indexOf: aString
		ifAbsent: [].
	object := index
		ifNil:
			[index := (self receiver perform: #class) allInstVarNames
				indexOf: aString
				ifAbsent: [^ nil].
			self receiver instVarAt: index]
		ifNotNil: [self selectedContext tempAt: index].
	^ object class