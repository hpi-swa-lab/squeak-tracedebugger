accessing - state
contextLabelCompactionStrategy: aSymbol

	self assert: (self contextLabelCompactionStrategyMap includesKey: aSymbol).
	
	contextLabelCompactionStrategy := aSymbol.
	
	self changed: #contextLabelCompactionStrategy.