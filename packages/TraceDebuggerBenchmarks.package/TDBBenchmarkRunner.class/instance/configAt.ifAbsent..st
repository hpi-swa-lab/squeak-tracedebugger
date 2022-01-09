accessing
configAt: aSymbol ifAbsent: exceptionBlock

	^ (self environment classNamed: #SmalltalkCI)
		ifNil: [self environment at: aSymbol ifAbsent: exceptionBlock]
		ifNotNil: [:sci | (sci getEnv: (aSymbol findFeatures joinSeparatedBy: $_) asUppercase)
			ifNil: exceptionBlock]