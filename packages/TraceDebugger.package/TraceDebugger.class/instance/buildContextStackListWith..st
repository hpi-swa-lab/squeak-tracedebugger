toolbuilder
buildContextStackListWith: aBuilder

	^ aBuilder pluggableListSpec new
		model: self;
		list: #contextStack;
		getSelected: #treeSelectedContext;
		setSelected: #treeSelectContext:;
		icon: #messageIconAt:;
		helpItem: #contextToolTipAt:;
		menu: #contextStackMenu:shifted:;
		yourself