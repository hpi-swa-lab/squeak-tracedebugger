tests - primitives
testUnknownPrimitive

	self assert: (Smalltalk vmParameterAt: 40) equals:
		(simulator evaluate: [Smalltalk vmParameterAt: 40]).