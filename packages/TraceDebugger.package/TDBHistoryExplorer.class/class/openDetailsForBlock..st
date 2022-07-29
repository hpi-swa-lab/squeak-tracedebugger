opening
openDetailsForBlock: aBlock

	^ (self forBlock: aBlock)
		representationMode: #details;
		open