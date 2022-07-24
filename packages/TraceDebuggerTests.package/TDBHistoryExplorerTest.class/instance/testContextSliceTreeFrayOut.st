tests - context slice tree
testContextSliceTreeFrayOut

	self newExplorer: [cursor exploreHistory: logic expression: '{yin. self}'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' '{nil . a TDBTestLogic}'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '<fray out: *{1 . a TDBTestLogic(1,nil)}*{1 . a TDBTestLogic(1,2.2)}*{1 . a TDBTestLogic(1,2)}*>'))
				(('rearrangeYinYang yin:' '<fray out: *{2 . a TDBTestLogic(2,2)}*{2 . a TDBTestLogic(2,1)}*>')))).