running
setUpMemory

	super setUpMemory.
	
	object := TDBBenchmarkTestObject new
		plonk: 1;
		griffle: 2;
		yourself.
	memory object: object priorTo: 1 instVarAt: 1 put: 0.