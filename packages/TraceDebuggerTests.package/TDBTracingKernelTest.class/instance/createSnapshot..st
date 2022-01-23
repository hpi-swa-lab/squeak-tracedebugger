snapshots
createSnapshot: aContext

	^ [ | dictionary |
	dictionary := OrderedDictionary new.
	Context allInstVarNames withIndexDo: [:title :index |
		dictionary at: title put: (aContext instVarAt: index)].
	1 to: aContext stackPtr do: [:index |
		dictionary at: index put: (aContext tempAt: index)].
	(aContext -> dictionary) printString]
		on: Error, Warning, Halt do: [:ex | ex printString]