tests - details
testDetails

	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0'))
			('TDBTestLogic>>doYinYang'
				(('yin:'))
				(('rearrangeYinYang yin:')))).
	
	self assertDetailsTexts:
		#(((1 1) '#(nil)')
		((1 2 1) '#(1)')
		((1 2 2) '#(2)')).