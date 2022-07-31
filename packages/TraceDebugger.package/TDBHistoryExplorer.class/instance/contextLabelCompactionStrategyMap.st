accessing - state
contextLabelCompactionStrategyMap

	^ OrderedDictionary new
		at: nil put: #(pathStringDo: 'display each context in a row completely');
		at: #compact put:
			{[:contextSlice :printerBlock |
				contextSlice compactPathString: false do: printerBlock].
			'do not repeat the class path of successor contexts'};
		at: #veryCompact put:
			{[:contextSlice :printerBlock |
				contextSlice compactPathString: true do: printerBlock].
			'do not repeat the class path of successor and parent contexts'};
		yourself