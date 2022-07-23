tests - details
testDetailsPrintStringError

	self newExplorer: [cursor exploreHistory: logic expression:
'yin := yin = 2 ifTrue: [#printError] ifFalse: [yin].
yang := nil.
self'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursor'
			(('@ 0'))
			('TDBTestLogic>>doYinYang'
				(('yin:'))
				(('rearrangeYinYang yin:')))).
	
	self assertDetailsTexts:
		#(((1 1) 'a TDBTestLogic')
		((1 2 1) 'a TDBTestLogic(1,nil)')
		((1 2 2) '<printString error: Error: printError>')).