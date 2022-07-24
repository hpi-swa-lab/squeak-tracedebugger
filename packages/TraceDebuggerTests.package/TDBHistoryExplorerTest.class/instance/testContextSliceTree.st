tests - context slice tree
testContextSliceTree

	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' '#(nil)'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '#(1)'))
				(('rearrangeYinYang yin:' '#(2)')))).