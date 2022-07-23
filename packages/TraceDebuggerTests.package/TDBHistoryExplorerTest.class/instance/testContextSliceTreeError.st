tests - context slice tree
testContextSliceTreeError

	self newExplorer: [cursor exploreHistory: logic expression:
'yin = 2 ifTrue: [self error: #plonk].
yang := nil.
self'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'a TDBTestLogic'))
			('TDBTestLogic>>doYinYang'
				(('yin:' 'a TDBTestLogic(1,nil)'))
				(('rearrangeYinYang yin:' '<error: Error: plonk>')))).