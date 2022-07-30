accessing - state
contextLabelCompactionStrategyMap

	^ OrderedDictionary new
		at: nil put: #(pathString 'display each context in a row completely');
		at: #compact put: #(compactPathString 'do not repeat the class path of successor contexts');
		at: #veryCompact put: #(compactRelativePathString 'do not repeat the class path of successor and parent contexts');
		yourself