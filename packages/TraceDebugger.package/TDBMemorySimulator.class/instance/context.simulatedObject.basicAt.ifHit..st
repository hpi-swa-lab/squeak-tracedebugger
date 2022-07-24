private - object access
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock

	| result |
	sideEffects ifNil: [^ nil].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
	index > 0 ifFalse: [^ nil].
	
	result := sideEffects
		object: anObject
		atTime: 0
		fieldAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result