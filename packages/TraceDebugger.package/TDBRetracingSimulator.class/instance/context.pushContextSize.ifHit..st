private
context: aContext pushContextSize: aContextObject ifHit: aBlock

	^ self
		context: aContext
		simulatedContextSize: aContextObject
		ifHit: [:value |
			aBlock value: (aContext push: value)]