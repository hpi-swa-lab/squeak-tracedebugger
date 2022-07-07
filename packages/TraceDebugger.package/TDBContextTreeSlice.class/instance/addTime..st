construction
addTime: timeIndex

	^ self addChild:
		(self class newForTime: timeIndex)