printing
printOn: aStream

	self selector ifNil: [^ super printOn: aStream].
	
	self shortPrintOn: aStream.
	self timeToRun ifNotNil: [:duration |
		aStream
			space;
			nextPut: $";
			print: duration;
			nextPut: $"].