testing
isDisplayingHistory

	^ self cursor timeIndex < (self cursor maxTimeIndex ifNil: [^ false])