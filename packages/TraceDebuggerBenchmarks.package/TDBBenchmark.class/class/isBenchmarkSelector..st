accessing
isBenchmarkSelector: aSymbol

	^ aSymbol numArgs isZero
		and: [aSymbol beginsWith: 'bench']