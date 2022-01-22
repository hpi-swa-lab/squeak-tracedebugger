instruction processing
context: aContext simulatedObject: anObject instVarAt: index put: value do: aBlock

	self record: anObject instVarAt: index oldValue:
		(aContext object: anObject instVarAt: index).
	
	^ super
		context: aContext
		simulatedObject: anObject
		instVarAt: index
		put: value
		do: aBlock