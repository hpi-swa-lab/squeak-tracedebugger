as yet unclassified
expectedFailureGroups

	| groups |
	groups := super expectedFailureGroups.
	
	groups at: #DoubleByteArrayTest put: ((groups at: #DoubleByteArrayTest ifAbsent: [{}]) ,
		{#testAtPutOutOfBounds flag: #todo. "#50"}).
	groups at: #DoubleWordArrayTest put: ((groups at: #DoubleWordArrayTest ifAbsent: [{}]) ,
		{#testAtPutOutOfBounds flag: #todo. "#50"}).
	groups at: #WordArrayTest put: ((groups at: #WordArrayTest ifAbsent: [{}]) ,
		{#testAtPutOutOfBounds flag: #todo. "#50"}).
	
	^ groups