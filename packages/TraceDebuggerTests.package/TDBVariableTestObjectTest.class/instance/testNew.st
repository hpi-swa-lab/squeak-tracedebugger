tests
testNew

	object := self classUnderTest new: 3.
	self assert: 3 equals: object size.
	
	object at: 1 put: 1.
	object at: 2 put: 3.
	object at: 3 put: 5.
	
	self assert: 1 equals: (object at: 1).
	self assert: 3 equals: (object at: 2).
	self assert: 5 equals: (object at: 3).