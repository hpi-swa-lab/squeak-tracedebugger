toolbuilder
buildContextStackListForNotifierWith: aBuilder

	^ (self buildContextStackListWith: aBuilder)
		setSelected: #notifierSelectContext:;
		yourself