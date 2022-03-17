accessing
stackForContext: aContext
	"Answer the visible stack for aContext."

	| stack |
	stack := aContext tdbFullStack tdbproxyYourself.
	^ self contextFilter
		ifNil: [stack]
		ifNotNil: [:filter | stack select: filter]