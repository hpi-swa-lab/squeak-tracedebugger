system primitives
instVarNamed: aString put: value ifAbsent: exceptionBlock

	| index |
	self flag: #moveUpstream.
	
	index := self class instVarIndexFor: aString asString ifAbsent: [^ exceptionBlock value].
	^ self instVarAt: index put: value