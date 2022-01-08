accessing
getEnv: aSymbol

	^ (self environment classNamed: #SmalltalkCI)
		ifNil: [self environment at: aSymbol]
		ifNotNil: [:sci | sci getEnv: (aSymbol findFeatures joinSeparatedBy: $_) asUppercase]