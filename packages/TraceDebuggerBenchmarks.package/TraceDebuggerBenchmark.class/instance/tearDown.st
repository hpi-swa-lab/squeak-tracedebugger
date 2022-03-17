running
tearDown

	^ [((debugger abandon) ifNotNil: #containingWindow) ifNotNil: #abandon]
		ensure: [super tearDown]