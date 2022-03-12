toolbuilder
buildContextStackListWith: aBuilder

	^ aBuilder pluggableListSpec new
		model: self;
		list: #contextStack;
		getSelected: #listSelectedContext;
		setSelected: #listSelectContext:;
		icon: #contextIconAt:;
		helpItem: #contextToolTipAt:;
		menu: #contextMenu:shifted:;
		yourself