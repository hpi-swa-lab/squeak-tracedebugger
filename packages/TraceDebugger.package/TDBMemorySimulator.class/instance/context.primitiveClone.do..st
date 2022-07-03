primitives
context: aContext primitiveClone: receiver do: aBlock
	<simPrimitive: 148>
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #shouldIsolate>

	| result copy copyClass size previousPrimitive |
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
		ifTrue: [^ self context: aContext primitiveFailTokenFor: copy].
	
	self addOwnObject: copy.
	
	self wantsToControlReads
		ifTrue:
			[1 to: copyClass instSize do: [:index |
				self context: aContext simulatedObject: receiver instVarAt: index ifHit: [:value |
					aContext
						object: copy
						instVarAt: index
						put: value]]].
	
	size := copyClass tdbIsContextClass
		ifTrue: [copy stackPtr]
		ifFalse: [aContext objectSize: copy].
	previousPrimitive := lastPrimitive.
	lastPrimitive := 60 "primitiveAt".
	[1 to: size do: [:index |
		self context: aContext simulatedObject: receiver basicAt: index ifHit: [:value |
			result := aContext
				doPrimitive:
					(((copyClass includesBehavior: String) and: [(aContext objectClass: value) includesBehavior: Character])
						ifTrue: [64 "primitiveStringAtPut"]
						ifFalse: [61 "primitiveAtPut"])
				method: aContext method
				receiver: copy
				args: {index. value}.
			(aContext isPrimFailToken: result)
				ifTrue: [^ result]
				ifFalse: [result pop]]]]
		ensure: [lastPrimitive := previousPrimitive].
	
	^ aContext