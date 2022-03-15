toolbuilder
buildContextStackListForNotifierWith: aBuilder

	^ (self buildContextStackListWith: aBuilder)
		setSelected: #notifierSelectContext:;
		dragItem: nil; "support traditional drag-to-debug gesture instead"
		yourself