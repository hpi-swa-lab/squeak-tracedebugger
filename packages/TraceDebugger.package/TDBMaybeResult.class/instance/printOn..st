printing
printOn: aStream

	super printOn: aStream.
	
	aStream
		space;
		nextPut: $(.
	self
		ifError: [:error |
			aStream
				nextPutAll: 'error: ';
				print: error]
		ifResult: [:result |
			aStream
				nextPutAll: 'result: ';
				print: result].
	aStream nextPut: $).