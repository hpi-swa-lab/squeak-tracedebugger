actions
toggleBottomContext: aContext

	self bottomContexts:
		((self bottomContexts includes: aContext)
			ifTrue: [self bottomContexts copyWithout: aContext]
			ifFalse: [self bottomContexts copyWith: aContext]).
	self changed: #treeSelectedContextPath.