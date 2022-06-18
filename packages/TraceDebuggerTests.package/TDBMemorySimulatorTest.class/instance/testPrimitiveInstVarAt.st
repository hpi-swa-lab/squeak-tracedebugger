tests
testPrimitiveInstVarAt

	| object |
	simulator shouldIsolate: true.
	object := TDBVariableTestObject new: 3.
	object at: 1 put: -1.
	
	self assert: 2 equals:
		((simulator evaluate:
			[object
				instVarAt: 1 put: 2;
				copy])
					instVarAt: 1).
	
	"bad index"
	self assert:
		(simulator evaluate:
			[self
				executeShould: [object instVarAt: 0 put: 2]
				inScopeOf: Error]).
	self assert:
		(simulator evaluate:
			[self
				executeShould: [object instVarAt: 6 put: 2]
				inScopeOf: Error]).
	
	"instvar access"
	self assert: 2 equals:
		((simulator evaluate:
			[object
				instVarAt: 3 put: 2;
				copy])
					instVarAt: 3).