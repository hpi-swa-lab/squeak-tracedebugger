private
context: aContext simulatedContextSize: aContextObject ifHit: aBlock

	| size |
	size := memory
		object: aContextObject
		atTime: timeIndex
		instVarAt: 3 "stackp"
		ifAbsent: [^ nil].
	
	^ aBlock value: size