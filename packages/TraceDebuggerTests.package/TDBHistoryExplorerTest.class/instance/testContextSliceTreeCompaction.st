tests - context slice tree
testContextSliceTreeCompaction

	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	self
		assert: #veryCompact equals: explorer contextLabelCompactionStrategy;
		assert: explorer shouldContractPaths.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '1'))
				(('rearrangeYinYang yin:' '2')))).
	
	explorer contextLabelCompactionStrategy: #compact.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang yin:' '2')))).
	
	explorer contextLabelCompactionStrategy: nil.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('TDBTestLogic>>yin:' '1'))
				(('TDBTestLogic>>rearrangeYinYang TDBTestLogic>>yin:' '2')))).
	
	explorer shouldContractPaths: false.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				('TDBTestLogic>>yin:'
					(('@ 7' '1')))
				('TDBTestLogic>>rearrangeYinYang'
					('TDBTestLogic>>yin:'
						(('@ 46' '2')))))).
	
	explorer contextLabelCompactionStrategy: #veryCompact.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				('yin:'
					(('@ 7' '1')))
				('rearrangeYinYang'
					('yin:'
						(('@ 46' '2')))))).