instance creation
forBlock: aBlock getObject: objectBlock expression: aStringOrText

	^ (self forBlock: aBlock getObject: objectBlock)
		expression: aStringOrText;
		yourself