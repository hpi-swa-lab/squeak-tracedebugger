printing
printOn: aStream

	super printOn: aStream.
	
	yin = #printError ifTrue:
		[self error: #printError].
	yin = #printErrorYang ifTrue:
		[self error: 'printError' , yang].
	
	(yin notNil or: [yang notNil]) ifTrue:
		[aStream
			nextPutAll: '(';
			print: yin;
			nextPutAll: ',';
			print: yang;
			nextPutAll: ')'].