menus
contextLabelCompactionMenu: menu

	menu
		tdbAddUpdating: 'contract paths'
		getState: [self shouldContractPaths]
		setState: [:boolean | self shouldContractPaths: boolean].
	menu addLine.
	
	self contextLabelCompactionStrategyMap keysDo: [:strategy |
		menu
			tdbAddUpdating:
				(strategy
					ifNotNil: [strategy findFeatures joinSeparatedBy: Character space]
					ifNil: ['none'])
			getState: [self contextLabelCompactionStrategy = strategy]
			setState: [self contextLabelCompactionStrategy: strategy]].
	
	^ menu