examples
exampleDrawing
	"
	self exampleDrawing
	"

	| morph |
	morph := RectangleMorph new.
	morph
		cornerStyle: #rounded;
		cornerRadius: 5.
	^ self openDetailsForBlock: [morph imageForm]