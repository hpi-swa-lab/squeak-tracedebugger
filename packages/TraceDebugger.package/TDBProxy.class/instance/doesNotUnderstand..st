dynamic forwarding
doesNotUnderstand: aMessage

	memory ifNil: [^ super doesNotUnderstand: aMessage].
	(thisContext findContextSuchThat: [:ctx | ctx receiver == Smalltalk and: [ctx selector == #logError:inContext:to:]]) ifNotNil:
		[self flag: #workaround.
		^ super doesNotUnderstand: aMessage].
	
	^ self xxxtdbproxyForward:
		[aMessage sendTo: self]