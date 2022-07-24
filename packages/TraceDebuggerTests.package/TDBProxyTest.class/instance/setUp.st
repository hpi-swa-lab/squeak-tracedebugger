running
setUp

	super setUp.
	
	memory := self memoryClass new.
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.
	memory object: object priorTo: 2 instVarAt: 1 put: 3.
	memory object: object priorTo: 3 instVarAt: 1 put: 4.
	memory object: object priorTo: 3 instVarAt: 2 put: 5.
	proxy := self newProxy.