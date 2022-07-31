accessing - state
contextLabelCompactionStrategy: aSymbol

	self assert: (self contextLabelCompactionStrategies includes: aSymbol).
	
	contextLabelCompactionStrategy := aSymbol.
	
	self changed: #contextLabelCompactionStrategy.