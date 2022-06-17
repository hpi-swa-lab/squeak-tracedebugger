running
setUp

	super setUp.
	
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.
	
	memory := self memoryClass new.
	memory object: object priorTo: 5 instVarAt: 1 put: 4.
	
	sideEffects := self memoryClass new.
	sideEffects object: object priorTo: 1 instVarAt: 1 put: 10.
	
	slice := self classUnderTest
		memory: memory
		intervals: {1 to: 3. 4 to: 4. 5 to: 6}
		rawValues: {1. object. 3}
		sideEffects: {nil. nil. sideEffects}.