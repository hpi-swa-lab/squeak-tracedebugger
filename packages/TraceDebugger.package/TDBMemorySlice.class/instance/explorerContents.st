Morphic-Explorer
explorerContents

	^ self timesAndValuesCollect: [:interval :value |
		value in: [:valueProxy |
			ObjectExplorerWrapper
				with: valueProxy
				name: interval printString
				model: self]]