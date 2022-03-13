examples
exampleDrawingError
	"
	Debgu a drawing error in Morphic. Originally, this was used to demonstrate the bug that was fixed via Morphic-ct.1768.
	
	self exampleDrawingError
	"

	| morph owner |
	morph := Morph new
		extent: 200 @ 200;
		borderWidth: 50;
		borderColor: Color red;
		cornerStyle: #rounded;
		cornerRadius: 20;
		yourself.
	owner := Morph new
		color: Color yellow;
		addMorph: morph;
		extent: morph extent + 20;
		yourself.
	morph center: owner center.
	
	self openForBlock: [owner imageForm].