private
context: aContext pushInstVar: anObject at: anInteger ifInMemory: aBlock

	^ self
		context: aContext
		simulatedObject: anObject
		instVarAt: anInteger
		ifInMemory: [:value |
			aBlock value: (aContext push: value)]