accessing - state
representationMode: aSymbol

	self assert: (self allRepresentationModes includes: aSymbol).
	representationMode := aSymbol.
	self changed: #representationMode.