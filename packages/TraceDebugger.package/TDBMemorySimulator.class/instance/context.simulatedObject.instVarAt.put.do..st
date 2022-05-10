instruction processing
context: aContext simulatedObject: anObject instVarAt: index put: value do: aBlock
	<tdbRequiredIf: #wantsToControlWrites>

	(self
		context: aContext
		simulatedObject: anObject
		instVarAt: index
		tryPut: value)
			ifTrue: [^ aContext].
	
	^ super context: aContext simulatedObject: anObject instVarAt: index put: value do: aBlock