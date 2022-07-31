opening
openDetailsForBlock: aBlock getObject: objectBlock expression: aStringOrText

	^ (self forBlock: aBlock getObject: objectBlock expression: aStringOrText)
		representationMode: #details;
		open