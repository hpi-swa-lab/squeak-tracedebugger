labels & details
contextLabelFor: aContextSlice

	| labelSelector |
	labelSelector := (self contextLabelCompactionStrategyMap at: self contextLabelCompactionStrategy) first.
	^ labelSelector value: aContextSlice