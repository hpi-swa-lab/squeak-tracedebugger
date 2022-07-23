tests - details
testDetailsPrintStringErrorInFrayOut

	self setUpCursorWithPrintStringErrorInFrayOut.
	
	self newExplorer: [cursor exploreHistory: logic expression:
'{yang. self}'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithPrintStringErrorInFrayOut'
			(('@ 0'))
			('TDBTestLogic>>doYinYang'
				(('yang:'))
				(('fixUpYinYang yang:'))
				(('rearrangeYinYang yang:')))).
	
	self assertDetailsTexts:
		#(((1 2 3) '*fray*out*3 parts*{1 . a TDBTestLogic(2,1)}*{1 . a TDBTestLogic(3,1)}*<printString error: Error: printError>*')).