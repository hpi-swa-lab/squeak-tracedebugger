opening
openDetailsForBlock: aBlock expression: aStringOrText

	^ (self forBlock: aBlock expression: aStringOrText)
		representationMode: #details;
		open