Morphic-Explorer
explorerContents
	"Convenience. Note that the use of proxies here might cause fray-outs. In this case, the user needs to choose an inspector instead."

	^ self timesAndValuesCollect: [:interval :value |
		value in: [:valueProxy |
			ObjectExplorerWrapper
				with: valueProxy
				name: interval printString
				model: self]]