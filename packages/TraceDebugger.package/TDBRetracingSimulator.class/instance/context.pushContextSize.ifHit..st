private
context: aContext pushContextSize: aContextObject ifHit: aBlock

	^ self
		context: aContext
		simulatedContextSize: aContextObject
		ifHit: [:result |
			aBlock value: (aContext push: result)]