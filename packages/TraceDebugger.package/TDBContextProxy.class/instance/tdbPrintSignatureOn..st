printing
tdbPrintSignatureOn: aStream

	| method class methodClass selector |
	method := self method ifNil:
		[^ super printOn: aStream].
	
	self closure ifNotNil: [:closure |
		aStream nextPutAll: '[] in '.
		closure outerContext ifNotNil:
			[:outer|
			 outer tdbPrintSignatureOn: aStream.
			 ^ self]].
	
	class := object objectClass: self receiver tdbproxyYourself.
	methodClass := method methodClass.
	selector := method selector ifNil: [method defaultSelector].
	
	aStream nextPutAll: class name.
	methodClass ~~ class ifTrue:
		[aStream nextPut: $(; nextPutAll: methodClass name; nextPut: $)].
	aStream nextPutAll: '>>'; nextPutAll: selector.