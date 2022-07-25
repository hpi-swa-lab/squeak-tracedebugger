examples
exampleMorphConstruction
	"
	self exampleMorphConstruction
	"

	^ self
		openForBlock: [WatchMorph new]
		expression: 'self imageForm'