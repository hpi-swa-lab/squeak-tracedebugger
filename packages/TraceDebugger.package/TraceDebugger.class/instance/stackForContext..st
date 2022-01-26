private
stackForContext: aContext

	| rootIndex stack |
	stack := aContext tdbStack contents.
	rootIndex := stack findFirst: [:context | self bottomContexts
		ifEmpty: [false]
		ifNotEmpty: [:theBottomContexts | theBottomContexts
			anySatisfy: [:bottomContext | context tdbIdentical: bottomContext]]].
	^ rootIndex = 0
		ifTrue: [stack]
		ifFalse: [stack first: rootIndex]