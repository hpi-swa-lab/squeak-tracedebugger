labels & details
contextLabelFor: aContextSlice

	^ (self contextLabelCompactionStrategyMap at: self contextLabelCompactionStrategy)
		value: aContextSlice