private - object access
context: aContext simulatedObject: anObject instVarAt: index tryPut: value
	"Try to write the value at the index-th instance variable of anObject. Answer true if the value was written or false if the implementors is not interested in performing this write operation. In the latter case, the sender will have to use the default strategy to perfom the write operation.
	This implementation ensures isolation if enabled. Hook for subclasses."

	| instSize |
	sideEffects ifNil: [^ false].
	(self hasOwnObject: anObject) ifTrue: [^ false].
	
	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
	index > 0 ifFalse: [^ false].
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