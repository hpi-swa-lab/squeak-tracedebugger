examples
exampleDrawingError
	"
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