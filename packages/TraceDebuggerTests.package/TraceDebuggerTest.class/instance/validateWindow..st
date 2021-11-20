asserting - toolbuilder
validateWindow: aToolBuilderSpec

	| window |
	window := self toolBuilder build: aToolBuilderSpec.
	
	self assert: window isSystemWindow.
	
	self assert: window extent > 100 asPoint.
	self deny: window label isEmptyOrNil.
	
	self shouldntFail: [window imageForm].
	
	self shouldntFail: [| hand |
		(hand := HandMorph new)
			sendEvent: (MouseEvent new
				setType: #mouseOver
				position: 0 asPoint
				buttons: 0
				hand: hand)
			focus: window].