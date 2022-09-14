instruction processing
context: aContext pushRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: (aContext at: tempVectorIndex + 1)
		basicAt: remoteTempIndex + 1
		ifHit: [:value | ^ aContext push: value].
	
	^ super context: aContext pushRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock