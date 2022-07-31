private - object access
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock
	"Try to read the index-th instance variable of anObject. If found, answer the result of evaluating aBlock with the variable value. Otherwise, the sender will have to use the default strategy to read the variable.
	This implementation ensures isolation if enabled. Hook for subclasses."

	| result |
	sideEffects ifNil: [^ nil].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ nil].
	index > 0 ifFalse: [^ nil].
	
	result := sideEffects
		object: anObject
		atTime: 0
		instVarAt: index
		ifAbsent:
			[| instSize |
			"Mimick the memory layout of the VM which stores fields after instance variables. See: MirrorPrimitiveTests>>#testMirrorInstVarAt.
			Note: Alternatively, we could align the layout of TDBMemory to the VM, but our current layout provides for better explorability/debuggability and is more efficient for common reads."
			index > (instSize := (aContext objectClass: anObject) instSize) ifTrue:
				[^ self context: aContext simulatedObject: anObject basicAt: index - instSize ifHit: aBlock].
			^ nil].
	^ aBlock value: result