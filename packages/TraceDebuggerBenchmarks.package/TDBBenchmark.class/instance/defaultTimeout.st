accessing
defaultTimeout

	^ (Smalltalk isLowerPerformance
		ifTrue: [90]
		ifFalse: [15]) seconds * 4