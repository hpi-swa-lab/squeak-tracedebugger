accessing
testGroups

	| groups |
	groups := super testGroups.
	
	self flag: #todo. "immutability primitives"
	groups removeKey: #WriteBarrierTest.
	
	^ groups