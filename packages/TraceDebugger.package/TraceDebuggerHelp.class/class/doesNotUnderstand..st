pages
doesNotUnderstand: aMessage

	(aMessage numArgs = 0 and: [self pages includes: aMessage selector])
		ifFalse: [^ super doesNotUnderstand: aMessage].
	
	^ self topicWithFigures: (self perform: (self basicSelectorFor: aMessage selector))