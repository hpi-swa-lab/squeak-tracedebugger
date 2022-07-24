tests
testSpawn

	| window |
	self newExplorer: [cursor exploreHistory: logic expression: '{yin - 1}'].
	window := self newWindow: [explorer spawn].
	explorer := window model.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'MessageNotUnderstood:*'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '#(0)'))
				(('rearrangeYinYang yin:' '#(1)')))).
	
	explorer expression: '(self isKindOf: Error) ifTrue: [self class] ifFalse: [self + 1]'.
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0' 'MessageNotUnderstood'))
			('TDBTestLogic>>doYinYang'
				(('yin:' '#(1)'))
				(('rearrangeYinYang yin:' '#(2)')))).