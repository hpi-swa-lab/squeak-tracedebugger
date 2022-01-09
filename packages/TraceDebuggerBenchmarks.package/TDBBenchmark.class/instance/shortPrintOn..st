printing
shortPrintOn: aStream

	self selector ifNil: [^ super printOn: aStream].
	
	aStream
		print: self class;
		nextPutAll: #>>;
		print: self selector.