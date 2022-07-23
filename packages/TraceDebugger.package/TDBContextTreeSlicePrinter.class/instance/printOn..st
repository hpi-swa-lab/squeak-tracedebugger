printing
printOn: aStream
	"Note: Prints the receiver, a TDBContextTreeSlicePrinter, to aStream. For building the path string of the contextTreeSlice, send #makeString."

	super printOn: aStream.
	
	aStream
		nextPutAll: ' on ';
		print: self contextTreeSlice.