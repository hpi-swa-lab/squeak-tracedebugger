toolbuilder
buildContextStackListWith: aBuilder

	self flag: #todo. "Revise - should we use tree... selectors here? Try out!"
	^ aBuilder pluggableListSpec new
		model: self;
		list: #contextStack;
		getSelected: #selectedContext;
		setSelected: #selectContext:;
		icon: #messageIconAt:;
		helpItem: #messageHelpAt:;
		menu: #contextStackMenu:shifted:;
		yourself