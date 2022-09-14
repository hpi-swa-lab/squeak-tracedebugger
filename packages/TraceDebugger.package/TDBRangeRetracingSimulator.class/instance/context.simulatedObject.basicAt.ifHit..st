private - object access
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock

	| result |
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ nil].
	index > 0 ifFalse: [^ nil].
	
	"1.) Look up value in sideEffects"
	super context: aContext simulatedObject: anObject basicAt: index ifHit: [:value | ^ aBlock value: value].
	
	"2.) Look up slice in memory"
	(aContext objectClass: anObject) tdbIsContextClass ifTrue:
		["Test historic variable size of the context instance"
		| size |
		size := memory
			object: anObject
			atTimes: timeIndices
			instVarAt: 3 "stackp"
			getCurrent: [nil]
			ifAbsent: [nil].
		((self context: aContext isVector: size)
			ifFalse: [size isNil or: [index <= size]]
			ifTrue: [size rawValues allSatisfy: [:eachSize | eachSize isNil or: [index <= eachSize]]])
				ifFalse: [^ aBlock value: (self context: aContext primitiveFailTokenFor: #'bad index')]].
	result := memory
		object: anObject
		atTimes: timeIndices
		fieldAt: index
		getCurrent:
			[index <= (aContext objectSize: anObject) ifFalse: [^ nil].
			self context: aContext readSlot: anObject at: index]
		ifAbsent: [^ nil].
	result hasSingleValue ifTrue:
		[^ aBlock value: result rawValues first].
	^ aBlock value: (allVectors add: result)