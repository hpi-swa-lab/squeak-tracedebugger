private
context: aContext cloneIntoTop: sourceObject
	"We have copied sourceObject into aContext top using the VM. Modify all slots of the copy with the relevant states from the memory if sourceObject was recorded."

	| copy copyClass size |
	self flag: #rematerialization. "We're doing basically rematerialization here! At some point later we could extract and elevate this to its own concept. We also might want to use rematerialization to retrace unknown primitives or FFI calls correctly. See: #23"
	
	copy := aContext top.
	copyClass := aContext objectClass: copy.
	copy := "aContext
		receiver:" copy
		tryPrimitive: 100 "primitivePerformInSuperclass"
		withArgs:
			{#copyFrom:.
			{copy}.
			"address the relevant failure code"
			(copyClass includesBehavior: CompiledCode)
				ifTrue: [CompiledCode]
				ifFalse: [Object]}.
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	(aContext isPrimFailToken: copy)
		ifTrue: [self error: 'Could not copy object'].
	
	size := copyClass == Context
		ifTrue: [sourceObject stackPtr]
		ifFalse: [aContext objectSize: sourceObject].
	1 to: size do: [:index |
		self context: aContext simulatedObject: sourceObject basicAt: index ifHit: [:value |
			(copyClass includesBehavior: String)
				ifTrue:
					[| result |
					result := "aContext
						receiver:" copy
						tryPrimitive: 64 "primitiveStringAtPut"
						withArgs: {index. value}.
					(aContext isPrimFailToken: result)
						ifTrue: [self error: 'Could not copy string']]
				ifFalse:
					[aContext
						object: copy
						basicAt: index
						put: value]]].
	
	^ aContext