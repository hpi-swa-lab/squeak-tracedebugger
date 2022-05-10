running
setUp

	super setUp.
	
	memory := self memoryClass new.
	simulator := self newSimulator.
	
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.
	memory object: object priorTo: 4 instVarAt: 2 put: 3.