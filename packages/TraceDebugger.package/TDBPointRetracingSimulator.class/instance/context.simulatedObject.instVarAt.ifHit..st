private - object access
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock

	| result |
	index > 0 ifFalse: [^ nil].
	
	super context: aContext simulatedObject: anObject instVarAt: index ifHit: [:value | ^ aBlock value: value].
	
	result := memory
		object: anObject
		atTime: timeIndex
		instVarAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result