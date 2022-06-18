private - object access
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock

	| result |
	index > 0 ifFalse: [^ nil].
	
	"1.) Look up value in sideEffects"
	super context: aContext simulatedObject: anObject basicAt: index ifHit: [:value | ^ aBlock value: value].
	
	"2.) Look up slice in memory"
	result := memory
		object: anObject
		atTimes: timeIndices
		fieldAt: index
		getCurrent: [self context: aContext readSlot: anObject at: index]
		ifAbsent: [^ nil].
	result hasSingleValue ifTrue:
		[^ aBlock value: result rawValues first].
	^ aBlock value: (allVectors add: result)