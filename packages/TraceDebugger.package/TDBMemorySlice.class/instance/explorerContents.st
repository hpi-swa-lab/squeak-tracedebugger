Morphic-Explorer
explorerContents

	^ self intervalsAndRawValuesCollect: [:interval :rawValue |
		ObjectExplorerWrapper
			with: rawValue
			name: interval printString
			model: self]