running
tearDown

	^ [((debugger "abandon" flag: #todo) ifNotNil: #containingWindow) ifNotNil: #abandon]
		ensure: [super tearDown]