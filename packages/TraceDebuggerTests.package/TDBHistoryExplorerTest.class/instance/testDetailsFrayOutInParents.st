tests - details
testDetailsFrayOutInParents

	self newExplorer: [cursor exploreHistory: logic expression: '{yin. self}'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0'))
			('TDBTestLogic>>doYinYang'
				(('yin:'))
				(('rearrangeYinYang yin:')))).
	
	self assertDetailsTexts:
		#(((1 2) '*yin:*fray*out*3 parts**yin:*{1 . a TDBTestLogic(1,nil)}**yang:*{1 . a TDBTestLogic(1,2.2)}**yang:*{1 . a TDBTestLogic(1,2)}**yin:*fray*out*2 parts**yin:*{2 . a TDBTestLogic(2,2)}**yang:*{2 . a TDBTestLogic(2,1)}*')).