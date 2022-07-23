tests
testPrintString

	self assert: 'a TDBTestLogic' equals: self classUnderTest new printString.
	
	self assert: 'a TDBTestLogic(1,nil)' equals:
		(self classUnderTest new
			yin: 1;
			printString).
	self assert: 'a TDBTestLogic(nil,2)' equals:
		(self classUnderTest new
			yang: 2;
			printString).
	
	self shouldRaiseError:
		[self classUnderTest new
			yin: #printError;
			printString].