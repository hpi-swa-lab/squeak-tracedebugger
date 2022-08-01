tests
testHideErrors

	self newExplorer: [cursor exploreHistory: logic expression: 'yang asString second'].
	
	explorer shouldHideErrors: false.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' '$i'))
			('TDBTestLogic>>doYinYang'
				(('yang:' '$.'))
				(('fixUpYinYang yang:' '<error: *subscript*>'))
				(('rearrangeYinYang yang:' '<error: *subscript*>')))).
	
	explorer shouldHideErrors: true.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' '$i'))
			(('TDBTestLogic>>doYinYang yang:' '$.'))).