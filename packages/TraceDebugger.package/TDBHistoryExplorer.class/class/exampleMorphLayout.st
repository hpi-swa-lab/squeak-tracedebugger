examples
exampleMorphLayout
	"
	self exampleMorphLayout
	"

	| morph |
	^ self
		openDetailsForBlock: [(morph := EventRecorderMorph new) fullBounds]
		getObject: [morph]
		expression:
'"self imageFormWithoutCompletingLayout"
	self allMorphsDo: [:m | m privateFullBounds: m bounds]. "set current geometry as final"
	self imageFormForRectangle: (0 @ 0 rect: 188 px @ 89 px) "screenshot in final bounds"'