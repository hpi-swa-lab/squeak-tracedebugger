tests
testCascade

	| memory object proxy |
	memory := self memoryClass new.
	object := TDBTestObject new
		plonk: 1;
		griffle: 2;
		yourself.
	memory object: object priorTo: 2 instVarAt: 1 put: 3.
	memory object: object priorTo: 3 instVarAt: 1 put: 4.
	memory object: object priorTo: 3 instVarAt: 2 put: 5.
	proxy := self classUnderTest for: object inMemory: memory atTime: 1.
	
	self assert: 3 equals: proxy yourself plonk.
	self assert: 5 equals: (proxy in: [:it | it griffle]).
	self assert: 8 equals: (proxy perform: #plonkPlusGriffle).