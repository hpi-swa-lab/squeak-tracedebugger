examples
exampleDrawingError
	"Debug a drawing error in Morphic. Originally, this was used to demonstrate the bug that was fixed via Morphic-ct.1768.
	
	self exampleDrawingError
	"

	| morph owner |
	morph := Morph new
		extent: 100 @ 100;
		borderWidth: 20;
		borderColor: Color red;
		cornerStyle: #rounded;
		cornerRadius: 5;
		yourself.
	owner := Morph new
		color: Color yellow;
		addMorph: morph;
		extent: morph extent + 10;
		yourself.
	morph center: owner center.
	
	^ self openForBlock: [owner imageForm] expression: 'self copy: self relativeRectangle'