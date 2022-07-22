private - object access
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock

	| result |
	sideEffects ifNil: [^ nil].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
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