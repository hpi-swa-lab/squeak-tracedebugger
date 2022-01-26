updating
updateRootContexts

	| newRootContexts stack |
	stack := self contextStack contents.
	newRootContexts := {stack
		detect: [:context | self bottomContexts
			ifEmpty: [false]
			ifNotEmpty: [:theBottomContexts | theBottomContexts
				anySatisfy: [:bottomContext | context tdbIdentical: bottomContext]]]
		ifNone: [stack last]}.
	
	rootContexts = newRootContexts ifFalse: [
		rootContexts := newRootContexts.
		self changed: #rootContexts].