tests
testPrimitiveAt

	| array |
	simulator shouldIsolate: true.
	array := {1. 3}.
	
	self assert: #(2 3) equals:
		(simulator evaluate:
			[array
				at: 1 put: 2;
				copy]).
	
	"bad index"
	self assert:
		(simulator evaluate:
			[self
				executeShould: [array at: self put: 2]
				inScopeOf: Error]).
	self assert:
		(simulator evaluate:
			[self
				executeShould: [array at: 0 put: 2]
				inScopeOf: Error]).
	self assert:
		(simulator evaluate:
			[self
				executeShould: [array at: 3 put: 2]
				inScopeOf: Error]).
	
	"bad argument"
	array := #[1 3] copy.
	self assert:
		(simulator evaluate:
			[self
				executeShould: [array at: 1 put: 256]
				inScopeOf: Error]).