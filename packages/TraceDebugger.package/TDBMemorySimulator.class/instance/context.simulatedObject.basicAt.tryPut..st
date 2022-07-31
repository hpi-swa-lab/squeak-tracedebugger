private - object access
context: aContext simulatedObject: anObject basicAt: index tryPut: value
	"Try to write the value at the index-th field of anObject. Answer true if the value was written or false if the implementors is not interested in performing this write operation. In the latter case, the sender will have to use the default strategy to perfom the write operation.
	This implementation ensures isolation if enabled. Hook for subclasses."

	| objectClass |
	sideEffects ifNil: [^ false].
	(self hasOwnObject: anObject) ifTrue: [^ false].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
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