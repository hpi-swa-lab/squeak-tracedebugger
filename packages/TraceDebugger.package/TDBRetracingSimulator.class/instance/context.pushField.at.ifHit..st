private
context: aContext pushField: anObject at: anInteger ifHit: aBlock

	^ self
		context: aContext
		simulatedObject: anObject
		basicAt: anInteger
		ifHit: [:value |
			aBlock value: (aContext push: value)]