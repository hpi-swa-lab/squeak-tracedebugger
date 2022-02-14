*TraceDebugger-Core-printing
tdbPrintSignatureOn: aStream

	| class methodClass selector |
	method ifNil:
		[^ super printOn: aStream].
	
	closureOrNil ifNotNil:
		[aStream nextPutAll: '[] in '.
		 closureOrNil outerContext ifNotNil:
			[:outer|
			 outer tdbPrintSignatureOn: aStream.
			 ^ self]].
	
	class := self objectClass: self receiver.
	methodClass := method methodClass.
	selector := method selector ifNil: [method defaultSelector].
	
	aStream nextPutAll: class name.
	methodClass ~~ class ifTrue:
		[aStream nextPut: $(; nextPutAll: methodClass name; nextPut: $)].
	aStream nextPutAll: '>>'; nextPutAll: selector.
	
	(methodClass whichCategoryIncludesSelector: selector)
		ifNotNil: [:category |
			aStream nextPut: $ ; nextPut: ${; nextPutAll: category; nextPut: $}].