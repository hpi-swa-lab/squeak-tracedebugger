private - object access
context: aContext simulatedObject: anObject basicAt: index tryPut: value

	| objectClass |
	sideEffects ifNil: [^ false].
	(self hasOwnObject: anObject) ifTrue: [^ false].
	
	index > 0 ifFalse: [^ false].
	index > (aContext objectSize: anObject) ifTrue: [^ false].
	((objectClass := aContext objectClass: anObject) isBits
		and: [(self context: aContext okToStore: value inBits: objectClass) not])
			ifTrue: [^ false].
	
	sideEffects
		object: anObject
		priorTo: 1
		fieldAt: index
		put: value.
	^ true