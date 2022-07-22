private - object access
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock

	| result |
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
	index > 0 ifFalse: [^ nil].
	
	super context: aContext simulatedObject: anObject basicAt: index ifHit: [:value | ^ aBlock value: value].
	
	result := memory
		object: anObject
		atTime: timeIndex
		fieldAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result