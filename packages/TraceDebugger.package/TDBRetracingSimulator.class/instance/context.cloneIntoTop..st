private
context: aContext cloneIntoTop: sourceObject

	| copy copyClass size |
	self flag: #rematerialization.
	
	copy := aContext top.
	copyClass := aContext objectClass: copy.
	copy := "aContext
		receiver:" copy
		tryPrimitive: 100 "primitivePerformInSuperclass"
		withArgs:
			{#copyFrom:.
			{copy}.
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