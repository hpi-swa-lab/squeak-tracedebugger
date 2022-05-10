instruction processing
context: aContext popIntoRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock
	<tdbRequiredIf: #wantsToControlWrites>

	| index object value |
	(self
		context: aContext
		simulatedObject: (object := aContext at: tempVectorIndex + 1)
		basicAt: (index := remoteTempIndex + 1)
		tryPut: (value := aContext pop))
			ifTrue: [^ aContext].
	
	aContext object: object basicAt: index put: value.
	^ aContext