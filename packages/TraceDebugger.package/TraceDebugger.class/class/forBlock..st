instance creation
forBlock: aBlock
 
	^ self newOn:
		(Process forBlock: aBlock)
		"aBlock newProcess"