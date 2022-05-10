private - object access
context: aContext simulatedObject: anObject instVarAt: index tryPut: value

	self record: anObject instVarAt: index oldValue:
		(aContext object: anObject instVarAt: index).
	
	^ super context: aContext simulatedObject: anObject instVarAt: index tryPut: value