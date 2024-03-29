private - object access
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock

	| result |
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ nil].
	index > 0 ifFalse: [^ nil].
	
	"1.) Look up value in sideEffects"
	super context: aContext simulatedObject: anObject instVarAt: index ifHit: [:value | ^ aBlock value: value].
	
	"2.) Look up value in memory"
	result := memory
		object: anObject
		atTime: timeIndex
		instVarAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result