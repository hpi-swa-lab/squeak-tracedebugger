accessing
messageText

	^ messageText ifNil: [self exception asString]