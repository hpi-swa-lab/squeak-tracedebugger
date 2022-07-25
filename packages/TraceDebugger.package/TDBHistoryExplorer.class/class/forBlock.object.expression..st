instance creation
forBlock: aBlock object: anObject expression: aStringOrText

	^ (self forBlock: aBlock)
		object: anObject;
		expression: aStringOrText;
		yourself