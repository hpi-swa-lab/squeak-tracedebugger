accessing
errorOrResult

	^ self error ifNil: [self result]