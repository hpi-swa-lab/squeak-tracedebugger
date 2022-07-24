accessing - state
contextLabelCompactionStrategyMap

	^ OrderedDictionary new
		at: nil put: #pathString;
		at: #compact put: #compactPathString;
		at: #veryCompact put: #compactRelativePathString;
		yourself