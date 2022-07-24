tests - context slice tree
testContextSliceTreeCollapse

	self newExplorer: [cursor exploreHistory: logic expression: 'yin'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '1'))
				(('rearrangeYinYang yin:' '2')))).
	
	"expand/collapse"
	#(((1 2) false
		('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			(('TDBTestLogic>>doYinYang' '2') *)))
	((1 2) true
		('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '1'))
				(('rearrangeYinYang yin:' '2')))))
	((1) false
		(('[] in TDBHistoryExplorerTest>>setUpCursor' '2') *))
	((1) true
		('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'nil'))
			(('TDBTestLogic>>doYinYang' '2') *))))
		tdbTuplesDo: [:path :expanded :expectedTree |
			explorer
				contextSlice: (self contextSliceAtPath: path)
				expanded: expanded.
			self assertContextSliceTree: expectedTree].