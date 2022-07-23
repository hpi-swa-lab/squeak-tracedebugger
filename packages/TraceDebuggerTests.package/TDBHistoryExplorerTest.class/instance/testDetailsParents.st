tests - details
testDetailsParents

	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0'))
			('TDBTestLogic>>doYinYang'
				(('yin:'))
				(('rearrangeYinYang yin:')))).
	
	#(((1 2) false (1 2) '#(2)')
	((1 2) true (1 2) '*yin:*#(1)**yin:*#(2)*')
	((1) false (1) '#(2)')
	((1) true (1) '*@ 0*nil**doYinYang*#(2)*')
	((1 2) true (1)  '*@ 0*nil**yin:*#(1)**yin:*#(2)*'))
		tdbTuplesDo: [:expandPath :expanded :selectPath :expectedText |
			explorer
				contextSlice: (self contextSliceAtPath: expandPath)
				expanded: expanded.
			self
				assert: (self contextSliceAtPath: selectPath)
				detailsText: expectedText].