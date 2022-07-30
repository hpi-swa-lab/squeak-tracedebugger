tests - context slice tree
testContextSliceTreeTruncation

	self setUpCursorWithLongPaths.
	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('TDBTestLogic class>>doYinYangIndirect doYinYangYourself TDBTestLogic>>doYinYang'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang yin:' '2')))).
	
	explorer contextLabelTruncation: #(1 0).
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('TDBTestLogic class>>doYinYangIndirect ...'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang ...' '2')))).
	
	explorer contextLabelTruncation: #(2 0).
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('TDBTestLogic class>>doYinYangIndirect doYinYangYourself ...'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang yin:' '2')))).
	
	explorer contextLabelTruncation: #(0 1).
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('... TDBTestLogic>>doYinYang'
				(('yin:' '1'))
				(('... yin:' '2')))).
	
	explorer contextLabelTruncation: #(0 2).
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('... TDBTestLogic class>>doYinYangYourself TDBTestLogic>>doYinYang'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang yin:' '2')))).
	
	explorer contextLabelTruncation: #(1 1).
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithLongPaths'
			(('@ 0' 'nil'))
			('TDBTestLogic class>>doYinYangIndirect ... TDBTestLogic>>doYinYang'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang yin:' '2')))).