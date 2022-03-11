toolbuilder
buildContextTreeWith: aBuilder

	^ aBuilder pluggableTreeSpec new
		model: self;
		roots: #treeRootContexts;
		getChildren: #treeChildContextsFor:;
		getSelected: #treeSelectedContext;
		setSelected: #treeSelectContext:;
		getSelectedPath: #treeSelectedContextPath;
		menu: #contextMenu:shifted:; 
		doubleClick: #toggleBorderContext:;
		label: #contextLabelFor:;
		icon: #contextIconFor:;
		help: #contextToolTipFor:;
		keyPress: #contextTreeKey:from:event:;
		dragItem: #dragContext:;
		dragType: #dragTypeForContext:;
		hScrollBarPolicy: #whenNeeded;
		columns: (self shouldShowReturnValue ifTrue:
			[{[:listMorph | (listMorph filteredItems collect: [:item |
				item preferredWidthOfColumn: 1]) max].
			[:listMorph | (listMorph filteredItems collect: [:item |
				item preferredWidthOfColumn: 2]) max]}]);
		yourself