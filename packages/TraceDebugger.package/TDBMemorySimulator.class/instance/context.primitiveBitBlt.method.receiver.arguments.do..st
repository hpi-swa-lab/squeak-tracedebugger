primitives
context: aContext primitiveBitBlt: primitiveName method: aCompiledMethod receiver: receiver arguments: arguments do: aBlock

	| result receiverCopy destForm sourceForm destBitsCopy |
	(self wantsToControlReads or: [self wantsToControlWrites]) ifFalse: [^ aBlock value].
	
	primitiveName = #primitiveCopyBits ifFalse:
		[^ self forbiddenOperationForContext: aContext].
	
	
	"1) Acquire form parameters"
	((aContext objectClass: receiver) includesBehavior: BitBlt) ifFalse:
		[^ self context: aContext primitiveFailTokenFor: nil].
	
	(self context: aContext simulatedObject: receiver instVarAt: 1 "destForm" ifHit: [:value |
		destForm := value. true])
			ifNil: [destForm := aContext object: receiver instVarAt: 1].
	((aContext objectClass: destForm) includesBehavior: Form) ifFalse:
		[^ self context: aContext primitiveFailTokenFor: nil].
	
	self wantsToControlReads ifTrue:
		[(self context: aContext simulatedObject: receiver instVarAt: 2 "sourceForm" ifHit: [:value |
			sourceForm := value. true])
				ifNil: [sourceForm := aContext object: receiver instVarAt: 2].
		sourceForm ifNotNil:
			[((aContext objectClass: sourceForm) includesBehavior: Form) ifFalse:
				[^ self context: aContext primitiveFailTokenFor: nil]]].
	self flag: #todo. "Materialize halftoneForm and other variables from BitBlt, too?"
	
	
	"2) Rematerialize the receiver and the form parameters into a copy"
	self flag: #rematerialization.
	
	"Shallow copy BitBlt receiver"
	result := self context: aContext primitiveClone: receiver do:
		[aContext push: (aContext simObjectShallowCopy: receiver)].
	(aContext isPrimFailToken: result)
		ifTrue: [^ result].
	receiverCopy := result pop.
	
	result := self context: aContext primitiveBitBltCopyForm: destForm into: receiverCopy setter: #setDestForm:.
	(aContext isPrimFailToken: result)
		ifTrue: [^ result].
	destBitsCopy := result.
	
	sourceForm ifNotNil:
		[result := self context: aContext primitiveBitBltCopyForm: sourceForm into: receiverCopy setter: #sourceForm:.
		(aContext isPrimFailToken: result)
			ifTrue: [^ result]].
	
	
	"3) Execute the primitive for the copied BitBlt instance"
	result := aContext
		tryNamedPrimitiveIn: aCompiledMethod
		for: receiverCopy
		withArgs: arguments.
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	(aContext isPrimFailToken: result)
		ifTrue: [^ result].
	
	
	"4) Read out the resulting destForm from the copied BitBlt instance and use the write hooks to install it in the original destForm"
	(self context: aContext simulatedObject: destForm instVarAt: 1 "bits" tryPut: destBitsCopy)
		ifFalse: [aContext object: destForm instVarAt: 1 put: destBitsCopy].
	
	^ aContext push: receiver