private
context: aContext pushField: anObject at: anInteger ifHit: aBlock

	^ self
		context: aContext
		simulatedObject: anObject
		basicAt: anInteger
		ifHit: [:result |
			aBlock value: (aContext push: result)]