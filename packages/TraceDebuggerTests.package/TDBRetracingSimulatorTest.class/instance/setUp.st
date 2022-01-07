running
setUp

	super setUp.
	
	memory := self memoryClass new.
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.