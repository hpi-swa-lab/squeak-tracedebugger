menus
contextLabelCompactionMenu: menu

	{[menu
		tdbAddUpdating: 'contract paths'
			getState: [self shouldContractPaths]
			setState: [:boolean | self shouldContractPaths: boolean];
		balloonTextForLastItem: 'display degenerate subtrees (linked lists) in a single tree item'.
	self shouldShowValuesInTree ifTrue:
		[menu
			tdbAddUpdating: 'shrink columns'
				getState: [self shouldShrinkColumns]
				setState: [:boolean | self shouldShrinkColumns: boolean];
			balloonTextForLastItem: 'overlap value labels and context labels for the sake of less horizontal scrolling']].
	
	[self contextLabelCompactionStrategies do: [:strategy |
		menu
			tdbAddUpdating:
				(strategy
					ifNotNil: [strategy findFeatures joinSeparatedBy: Character space]
					ifNil: ['none'])
				getState: [self contextLabelCompactionStrategy = strategy]
				setState: [self contextLabelCompactionStrategy: strategy];
			balloonTextForLastItem: (self contextLabelCompactionStrategyHelpFor: strategy)]].
	
	[self contextLabelTruncationLabels withIndexDo: [:label :index |
		menu
			tdbAddUpdating:
				[| truncation |
				('truncate {1}' format: {label})
					, ((truncation := self contextLabelTruncation at: index) > 0
						ifFalse: ['']
						ifTrue: [' ({1})' format: {truncation}])]
				getState: [(self contextLabelTruncation at: index) > 0]
				setState:
					[| newTruncation |
					newTruncation := self
						requestContextLabelTruncationFor: label
						oldValue: (self contextLabelTruncation at: index)
						orCancel: [#cancel].
					newTruncation = #cancel ifFalse:
						[self contextLabelTruncation:
							(self contextLabelTruncation copy
								at: index put: newTruncation;
								yourself)]];
			balloonTextForLastItem: ('number of {1} contexts to be shown before truncation' format: {label})]]}
	
		do: #value
		separatedBy: [menu addLine].
	
	^ menu