instruction processing
context: aContext popIntoRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock

	| index object |
	object := aContext at: tempVectorIndex + 1.
	index := remoteTempIndex + 1.
	self record: object fieldAt: index oldValue:
		(aContext object: object basicAt: index).
	
	^ super context: aContext popIntoRemoteTemp: remoteTempIndex inVectorAt: tempVectorIndex do: aBlock