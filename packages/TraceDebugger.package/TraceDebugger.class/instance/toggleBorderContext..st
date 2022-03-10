actions
toggleBorderContext: aContext

	aContext == aContext tdbproxyYourself ifFalse:
		[^ self toggleBorderContext: aContext tdbproxyYourself].
	
	self borderContexts:
		(aContext
			ifNil: [#()]
			ifNotNil: [
				(self isBorderContext: aContext)
					ifTrue: [self borderContexts copyWithout: aContext]
					ifFalse: [self borderContexts copyWith: aContext]]).
	self changed: #treeSelectedContextPath.