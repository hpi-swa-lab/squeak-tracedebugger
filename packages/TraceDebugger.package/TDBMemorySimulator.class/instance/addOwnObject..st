accessing - isolation
addOwnObject: anObject

	^ (ownObjects ifNil: [^ anObject]) at: anObject put: anObject