private
context: aContext pushInstVar: anObject at: anInteger ifHit: aBlock

	^ self
		context: aContext
		simulatedObject: anObject
		instVarAt: anInteger
		ifHit: [:value |
			aBlock value: (aContext push: value)]