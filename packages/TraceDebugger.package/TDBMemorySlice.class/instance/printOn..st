printing
printOn: aStream

	super printOn: aStream.
	
	aStream nextPut: $(.
	self timesAndRawValuesDo: [:times :rawValue |
		aStream
			print: times;
			nextPutAll: ' -> ';
			print: rawValue.
		aStream space].
	self times ifNotEmpty:
		[aStream position: aStream position - 1].
	aStream nextPut: $).