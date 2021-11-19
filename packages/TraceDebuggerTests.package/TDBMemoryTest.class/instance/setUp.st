running
setUp

	super setUp.
	
	memory := self classUnderTest new.
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.