actions
toggleBorderContext: aContext

	self borderContexts:
		(aContext ifNotNil:
			[(self isBorderContext: aContext)
				ifTrue: [self borderContexts copyWithout: aContext tdbproxyYourself]
				ifFalse: [self borderContexts copyWith: aContext]]).
	self changed: #treeSelectedContextPath.