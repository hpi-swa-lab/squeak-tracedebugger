tests
testExpression

	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	explorer expression: 'yang'.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('yang:' '2.2'))
				(('fixUpYinYang yang:' '2'))
				(('rearrangeYinYang yang:' '1')))).
	
	self should: [explorer expression: 'yang:'] raise: SyntaxErrorNotification.