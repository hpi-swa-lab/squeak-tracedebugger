tests - context slice tree
testContextSliceTreePrintStringErrorInFrayOut

	self flag: #forLater. "Is it worth to also handle fray outs in printString error and test this? See #printErrorYang."
	
	self setUpCursorWithPrintStringErrorInFrayOut.
	
	self newExplorer: [cursor exploreHistory: logic expression: '{yang. self}'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithPrintStringErrorInFrayOut'
			(('@ 0' '<fray out: *{nil . a TDBTestLogic}*{nil . a TDBTestLogic(1,nil)}*>'))
			('TDBTestLogic>>doYinYang'
				(('yang:' '{2.2 . a TDBTestLogic(1,2.2)}'))
				(('fixUpYinYang yang:' '<fray out: *{2 . a TDBTestLogic(1,2)}*{2 . a TDBTestLogic(2,2)}*>'))
				(('rearrangeYinYang yang:' '<fray out: *{1 . a TDBTestLogic(2,1)}*{1 . a TDBTestLogic(3,1)}*<printString error: Error: printError>*>')))).