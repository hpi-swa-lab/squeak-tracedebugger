Autocompletion
guessTypeForName: aString

	| index |
	index := self objectClass
		instVarIndexFor: aString asString
		ifAbsent: [^ nil].
	^ (self doItReceiver instVarAt: index) perform: #class