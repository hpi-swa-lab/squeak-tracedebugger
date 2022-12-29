tests - context slice tree
testNavigationSlider

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
	
	#(((1 1) 1)
	((1 2 2) 3)
	((1 2 4 1) 5)
	((1 2 4 2) 6))
		tdbTuplesDo: [:path :expectedSliderIndex |
			explorer selectContextSlice: (self contextSliceAtPath: path).
			self assert: expectedSliderIndex equals: explorer sliderIndex.
			self assert: {explorer minimumSliderIndex. explorer sliderIndex. explorer maximumSliderIndex} isSorted];
		
		tdbTuplesDo: [:expectedPath :sliderIndex |
			explorer sliderIndex: sliderIndex.
			self
				assert: (self contextSliceAtPath: expectedPath)
				equals: explorer selectedContextSlice].