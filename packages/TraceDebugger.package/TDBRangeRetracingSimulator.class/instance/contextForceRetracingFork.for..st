primitives
contextForceRetracingFork: aContext for: vector

	(self context: aContext isVector: vector)
		ifFalse: [^ aContext push: vector].
	
	^ self fork: aContext for: vector collect: [:eachContext :timeIndex |
		eachContext push: timeIndex]