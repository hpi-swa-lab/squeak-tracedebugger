accessing
pages

	^ super pages collect: [:page |
		page isSymbol
			ifTrue: [self basicSelectorFor: page]
			ifFalse: [page]]