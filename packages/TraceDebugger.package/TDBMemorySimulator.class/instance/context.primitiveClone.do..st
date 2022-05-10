primitives
context: aContext primitiveClone: receiver do: aBlock
	<simPrimitive: 148>
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #shouldIsolate>

	| result copy copyClass size |
	result := aBlock value.
	(aContext isPrimFailToken: result) ifTrue: [^ result].
	self assert: result == aContext.
	
	"We have copied sourceObject into resultContext top using the VM. Modify all slots of the copy with the relevant states from the memory if sourceObject was recorded."
	copy := aContext top.
	
	self flag: #rematerialization. "We're doing basically rematerialization here! At some point later we could extract and elevate this to its own concept. We also might want to use rematerialization to retrace unknown primitives or FFI calls correctly. See: #23"
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
		ifTrue: [receiver stackPtr]
		ifFalse: [aContext objectSize: receiver].
	1 to: size do: [:index |
		self context: aContext simulatedObject: receiver basicAt: index ifHit: [:value |
			(copyClass includesBehavior: String)
				ifTrue:
					[result := "aContext
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
	
	self addOwnObject: copy.
	
	^ aContext