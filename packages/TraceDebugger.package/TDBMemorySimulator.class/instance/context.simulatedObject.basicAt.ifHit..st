private - object access
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock
	"Try to read the index-th field of anObject. If found, answer the result of evaluating aBlock with the field value. Otherwise, the sender will have to use the default strategy to read the field.
	This implementation ensures isolation if enabled. Hook for subclasses."

	| result |
	sideEffects ifNil: [^ nil].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ nil].
	index > 0 ifFalse: [^ nil].
	
	result := sideEffects
		object: anObject
		atTime: 0
		fieldAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result