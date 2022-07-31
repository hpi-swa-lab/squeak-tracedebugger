examples
exampleMorphConstruction
	"
	self exampleMorphConstruction
	"

	^ self
		openDetailsForBlock: [WatchMorph new]
		expression: 'self imageForm'