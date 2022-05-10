primitives
context: aContext primitive: receiver constantFill: value do: aBlock
	<simPrimitive: 145>
	<tdbRequiredIf: #wantsToControlWrites>

	| class primitiveAtPut result |
	self flag: #optimize.
	
	primitiveAtPut := ((class := aContext objectClass: receiver) includesBehavior: String)
		ifTrue: [64 "primitiveStringAtPut"]
		ifFalse: [61 "primitiveAtPut"].
	1 to: (aContext objectSize: receiver) do: [:index |
		self context: aContext primitive: receiver at: index put: value do:
			[result := "aContext receiver:" receiver tryPrimitive: primitiveAtPut withArgs: {index. value}.
			(aContext isPrimFailToken: result) ifTrue:
				[index = 1 ifTrue: [^ result].
				self error: 'primitive failed half-way']]].
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	
	^ aContext