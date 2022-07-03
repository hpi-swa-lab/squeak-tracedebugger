accessing - toolbuilder
contextLabelFor: aContextSlice

	^ (self contextLabelCompactionStrategyMap at: self contextLabelCompactionStrategy)
		value: aContextSlice