comparing
tdbContentEquals: anotherObject

	self class = anotherObject class ifFalse: [^ false].
	^ (self error tdbContentEquals: anotherObject error)
		and: [self result tdbContentEquals: anotherObject result]