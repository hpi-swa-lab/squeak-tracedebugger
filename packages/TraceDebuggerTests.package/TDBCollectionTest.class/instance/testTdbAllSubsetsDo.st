tests
testTdbAllSubsetsDo

	| allSubsets values |
	values := #(2 3 5).
	
	allSubsets := Set new.
	values tdbAllSubsetsDo: [:subset | allSubsets add: subset].
	
	self assert: 2 ** values size equals: allSubsets size.
	self
		assert: (Set withAll: #(1 2 3 5 6 10 15 30))
		equals: (allSubsets collect: [:subset | subset inject: 1 into: #*]).