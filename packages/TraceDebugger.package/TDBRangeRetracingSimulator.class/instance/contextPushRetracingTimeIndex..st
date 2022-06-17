primitives
contextPushRetracingTimeIndex: aContext

	^ aContext push:
		(allVectors add: self makeTimeIndexVector)