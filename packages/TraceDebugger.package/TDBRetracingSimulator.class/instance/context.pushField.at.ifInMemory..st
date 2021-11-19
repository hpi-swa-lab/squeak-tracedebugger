private
context: aContext pushField: anObject at: anInteger ifInMemory: aBlock

	^ self
		context: aContext
		simulatedObject: anObject
		basicAt: anInteger
		ifInMemory: [:result |
			aBlock value: (aContext push: result)]