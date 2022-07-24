tests - context slice tree
testContextSliceTreePrintStringError

	self newExplorer: [cursor exploreHistory: logic expression:
'yin := yin = 2 ifTrue: [#printError] ifFalse: [yin].
yang := nil.
self'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'a TDBTestLogic'))
			('TDBTestLogic>>doYinYang'
				(('yin:' 'a TDBTestLogic(1,nil)'))
				(('rearrangeYinYang yin:' '<printString error: Error: printError>')))).