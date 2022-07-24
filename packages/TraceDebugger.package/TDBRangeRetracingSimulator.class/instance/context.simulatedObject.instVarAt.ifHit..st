private - object access
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock

	| result |
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
	index > 0 ifFalse: [^ nil].
	
	"1.) Look up value in sideEffects"
	super context: aContext simulatedObject: anObject instVarAt: index ifHit: [:value | ^ aBlock value: value].
	
	"2.) Look up slice in memory"
	result := memory
		object: anObject
		atTimes: timeIndices
		instVarAt: index
		getCurrent: [aContext object: anObject instVarAt: index]
		ifAbsent: [^ nil].
	result hasSingleValue ifTrue:
		[^ aBlock value: result rawValues first].
	^ aBlock value: (allVectors add: result)