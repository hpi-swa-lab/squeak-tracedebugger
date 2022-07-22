comparing
= anotherResult

	self class == anotherResult class ifFalse: [^ false].
	^ {error. result} = {anotherResult error. anotherResult result}