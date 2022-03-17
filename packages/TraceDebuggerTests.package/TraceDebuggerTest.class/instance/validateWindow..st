asserting - toolbuilder
validateWindow: aToolBuilderSpec
	"Crash & smoke tests for the Morphic UI"

	| window |
	Smalltalk isMorphic ifFalse: [self error: 'Cannot run these tests in MVC'].
	
	window := self toolBuilder build: aToolBuilderSpec.
	
	self assert: window isSystemWindow.
	
	self assert: window extent > 100 asPoint.
	self deny: window label isEmptyOrNil.
	
	self shouldntRaise: [window imageForm].
	
	self shouldntRaise: [| hand |
		(hand := HandMorph new)
			sendEvent: (MouseEvent new
				setType: #mouseOver
				position: 0 asPoint
				buttons: 0
				hand: hand)
			focus: window].
	
	self validateBalloonsIn: window.
	self validateMenusIn: window.
	^ window