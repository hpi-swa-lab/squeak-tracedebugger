toolbuilder
buildContextStackListWith: aBuilder

	^ aBuilder pluggableListSpec new
		model: self;
		list: #contextStack;
		getSelected: #selectedContext;
		setSelected: #selectContext:;
		icon: #messageIconAt:;
		helpItem: #messageHelpAt:;
		menu: #contextStackMenu:shifted:;
		yourself