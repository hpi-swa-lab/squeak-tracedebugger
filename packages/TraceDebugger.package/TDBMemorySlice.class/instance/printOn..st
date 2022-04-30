printing
printOn: aStream

	super printOn: aStream.
	
	aStream nextPut: $(.
	self intervalsAndRawValuesDo: [:interval :rawValue |
		aStream
			print: interval;
			nextPutAll: ' -> ';
			print: rawValue.
		aStream space].
	aStream position: aStream position - 1.
	aStream nextPut: $).