actions
toggleBottomContext: aContext

	aContext == aContext tdbproxyYourself ifFalse:
		[^ self toggleBottomContext: aContext tdbproxyYourself].
	
	self bottomContexts:
		(aContext
			ifNil: [#()]
			ifNotNil: [
				(self bottomContexts includes: aContext)
					ifTrue: [self bottomContexts copyWithout: aContext]
					ifFalse: [self bottomContexts copyWith: aContext]]).
	self changed: #treeSelectedContextPath.