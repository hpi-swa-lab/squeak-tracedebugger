accessing
stackForContext: aContext

	| stack |
	stack := aContext tdbFullStack tdbproxyYourself.
	^ self contextFilter
		ifNil: [stack]
		ifNotNil: [:filter | stack select: filter]