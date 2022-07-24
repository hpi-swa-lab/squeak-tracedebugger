private - object access
context: aContext simulatedObject: anObject instVarAt: index tryPut: value

	(aContext objectClass: index) tdbIsIntegerClass ifFalse: [^ false].
	(index > 0 and: [index <= (aContext objectClass: anObject) instSize]) ifFalse:
		["subscript error, retry via super"
		^ super context: aContext simulatedObject: anObject instVarAt: index tryPut: value].
	
	self record: anObject instVarAt: index oldValue:
		(aContext object: anObject instVarAt: index).
	
	^ super context: aContext simulatedObject: anObject instVarAt: index tryPut: value