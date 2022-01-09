Tools-icons
toolIconSelector: aSelector

	(self isMeta
		or: [self isAbstract]
		or: [(self benchmarkSelectors includes: aSelector) not])
			ifTrue: [^ super toolIconSelector: aSelector].
	
	^ #testGray