private - object access
context: aContext simulatedObject: anObject basicAt: index tryPut: value

	sideEffects ifNil: [^ false].
	
	(self hasOwnObject: anObject) ifTrue: [^ false].
	
	sideEffects
		object: anObject
		priorTo: 1
		fieldAt: index
		put: value.
	^ true