dynamic forwarding
doesNotUnderstand: aMessage

	memory ifNil: [^ super doesNotUnderstand: aMessage].
	
	^ self xxxtdbproxyForward:
		[aMessage sendTo: self]