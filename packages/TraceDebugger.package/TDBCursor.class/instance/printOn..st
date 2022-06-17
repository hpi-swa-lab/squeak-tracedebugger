printing
printOn: aStream

	super printOn: aStream.
	aStream
		nextPutAll: ' on ';
		nextPutAll: self context printString. "isolation-safe!"