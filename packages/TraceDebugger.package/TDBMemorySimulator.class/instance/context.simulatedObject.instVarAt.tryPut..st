private - object access
context: aContext simulatedObject: anObject instVarAt: index tryPut: value

	| instSize |
	sideEffects ifNil: [^ false].
	
	(self hasOwnObject: anObject) ifTrue: [^ false].
	index > (instSize := (aContext objectClass: anObject) instSize) ifTrue:
		["Mimick the memory layout of the VM which stores fields after instance variables. See: MirrorPrimitiveTests>>#testMirrorInstVarAt.
			Note: Alternatively, we could align the layout of TDBMemory to the VM, but our current layout provides for better explorability/debuggability and is more efficient for common reads."
		^ self context: aContext simulatedObject: anObject basicAt: index - instSize tryPut: value].
	
	sideEffects
		object: anObject
		priorTo: 1
		instVarAt: index
		put: value.
	^ true