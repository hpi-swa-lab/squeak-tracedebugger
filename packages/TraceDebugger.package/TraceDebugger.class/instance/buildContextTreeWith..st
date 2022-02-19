toolbuilder
buildContextTreeWith: aBuilder

	^ aBuilder pluggableTreeSpec new
		model: self;
		roots: #treeRootContexts;
		getChildren: #treeChildContextsFor:;
		label: #contextLabelFor:;
		getSelected: #treeSelectedContext;
		setSelected: #treeSelectContext:;
		getSelectedPath: #treeSelectedContextPath;
		menu: #contextStackMenu:shifted:; 
		doubleClick: #toggleBottomContext:;
		label: #labelForContext:;
		icon: #messageIconFor:;
		help: #messageHelpFor:;
		keyPress: #contextTreeKey:from:event:;
		dragItem: #dragContext:;
		dragType: #dragTypeForContext:;
		hScrollBarPolicy: #whenNeeded;
		yourself