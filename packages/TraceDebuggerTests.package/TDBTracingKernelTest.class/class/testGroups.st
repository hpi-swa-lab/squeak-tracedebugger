accessing
testGroups

	| groups |
	groups := super testGroups.
	
	self flag: #todo. "become primitives"
	groups removeKey: #BecomeTest.
	self assert: (groups at: #ObjectTest) first ~= #-.
	groups at: #ObjectTest put: ((groups at: #ObjectTest) copyWithout: #testBecome).
	
	self flag: #todo. "immutability primitives"
	groups removeKey: #WriteBarrierTest.
	
	^ groups