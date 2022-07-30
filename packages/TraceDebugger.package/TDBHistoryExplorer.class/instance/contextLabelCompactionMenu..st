menus
contextLabelCompactionMenu: menu

	menu
		tdbAddUpdating: 'contract paths'
			getState: [self shouldContractPaths]
			setState: [:boolean | self shouldContractPaths: boolean];
		balloonTextForLastItem: 'display degenerate subtrees (linked lists) in a single tree item'.
	self shouldShowValuesInTree ifTrue:
		[menu
			tdbAddUpdating: 'shrink columns'
				getState: [self shouldShrinkColumns]
				setState: [:boolean | self shouldShrinkColumns: boolean];
			balloonTextForLastItem: 'overlap value labels and context labels for the sake of less horizontal scrolling'].
	menu addLine.
	
	self contextLabelCompactionStrategies do: [:strategy |
		menu
			tdbAddUpdating:
				(strategy
					ifNotNil: [strategy findFeatures joinSeparatedBy: Character space]
					ifNil: ['none'])
				getState: [self contextLabelCompactionStrategy = strategy]
				setState: [self contextLabelCompactionStrategy: strategy];
			balloonTextForLastItem: (self contextLabelCompactionStrategyHelpFor: strategy)].
	
	^ menu