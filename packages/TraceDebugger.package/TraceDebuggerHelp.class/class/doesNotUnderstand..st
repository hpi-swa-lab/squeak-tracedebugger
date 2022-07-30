pages
doesNotUnderstand: aMessage

	(aMessage selector isKindOf: AbstractHelpTopic) ifTrue:
		["Hack for polymorphy with HelpTopic, so we can embed the receiver in the #pages of another class-based help topic at a certain priority."
		^ aMessage selector].
	
	(aMessage numArgs = 0 and: [self pages includes: aMessage selector])
		ifFalse: [^ super doesNotUnderstand: aMessage].
	
	^ self formattedTopic: (self perform: (self basicSelectorFor: aMessage selector))