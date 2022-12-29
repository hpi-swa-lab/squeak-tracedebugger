tests - context slice tree
testNavigationSteps

	self newExplorer: [cursor exploreHistory: logic expression: '{yin. yang}'].
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' '#(nil nil)'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '#(1 nil)'))
				(('yang:' '#(1 2.2)'))
				(('fixUpYinYang yang:' '#(1 2)'))
				('rearrangeYinYang'
					(('yin:' '#(2 2)'))
					(('yang:' '#(2 1)'))))).
	explorer representationMode: #details.
	
	{{[:expl0rer | expl0rer selectContextSlice: (self contextSliceAtPath: #(1 2 2))]. #(1 2 2)}.
	#(stepBackInto (1 2 1)).
	#(stepBackInto (1 1)).
	#(stepBackInto (1 1)).
	#(stepForwardInto (1 2 1)).
	#(stepForwardInto (1 2 2)).
	#(stepForwardOver (1 2 3)).
	#(stepForwardOver (1 2 4 2)).
	#(stepBackOver (1 2 4 1)).
	#(stepBackOver (1 2 3))}
		tdbTuplesDo: [:step :expectedSelectedPath |
			step value: explorer.
			self
				assert: (self contextSliceAtPath: expectedSelectedPath)
				equals: explorer selectedContextSlice].