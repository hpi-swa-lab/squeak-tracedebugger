accessing
methodClass

	^ self method methodClass ifNil: [super methodClass]