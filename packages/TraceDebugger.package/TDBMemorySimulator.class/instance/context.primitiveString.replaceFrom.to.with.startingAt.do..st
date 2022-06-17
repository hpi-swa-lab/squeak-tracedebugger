primitives
context: aContext primitiveString: receiver replaceFrom: start to: stop with: replacement startingAt: repStart do: aBlock
	<simPrimitive: 105 >
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #wantsToControlWrites>

	| repOff isString value result |
	repOff := repStart - start.
	isString := (aContext objectClass: receiver) includesBehavior: String.
	
	start to: stop do: [:index |
		(self context: aContext simulatedObject: replacement basicAt: index + repOff ifHit: [:existingValue |
			value := existingValue.
			true])
				ifNil:
					[value := "aContext
						receiver:" replacement
						tryPrimitive: 60
						withArgs: {index + repOff}.
					(aContext isPrimFailToken: value) ifTrue:
						[^ value]].
		(self context: aContext simulatedObject: receiver basicAt: index tryPut: value) ifFalse:
			[result := "aContext
				receiver:" receiver
				tryPrimitive:
					((isString and: [(aContext objectClass: value) includesBehavior: Character])
						ifTrue: [64 "primitiveStringAtPut"]
						ifFalse: [61 "primitiveAtPut"])
				withArgs: {index. value}.
			(aContext isPrimFailToken: result) ifTrue:
				[^ result]]].
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	
	^ aContext push: receiver