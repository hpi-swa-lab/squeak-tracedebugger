instruction processing
context: aContext storeIntoRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock
	<tdbRequiredIf: #wantsToControlWrites>

	| index object value |
	(self
		context: aContext
		simulatedObject: (object := aContext at: tempVectorIndex + 1)
		basicAt: (index := remoteTempIndex + 1)
		tryPut: (value := aContext top))
			ifTrue: [^ aContext].
	
	aContext object: object basicAt: index put: value.
	^ aContext