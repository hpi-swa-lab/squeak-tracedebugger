accessing - toolbuilder
contextLabelFor: aContext

	| label contextStyle |
	label := aContext printString.
	
	self shouldShowReturnValue ifTrue:
		[self cursor
			returnValueFor: aContext
			ifPresent: [:value |
				label := label, Character tab
					, ([value printStringLimitedTo: 80]
						ifError: [:msg | '<error: {1}' format: {msg}])]].
	
	aContext tdbIsSignalContext ifTrue:
		[label := label asText
			addAllAttributes: (self tdbAttributesForStyle: self styleForSignalContext);
			yourself].
	
	(self cursor isContextAlive: aContext)
		ifTrue: [contextStyle := self styleForAliveContext]
		ifFalse:
			[(self hasContextSelected
				and: [(self cursor senderOf: aContext) tdbIdentical: self selectedContext])
					ifTrue:
						[contextStyle := true
							caseOf:
								{[self selectedContext isDead not
									and: [self selectedContext willReallySend]
									and: [self cursor isContextAlive: aContext atTime: self cursor timeIndex + 1]]
										-> [self styleForNextContext].
								[self cursor isContextAlive: aContext atTime: self cursor timeIndex - 1]
										-> [self styleForPreviousContext]}
							otherwise: []].
			contextStyle ifNil: [contextStyle := self styleForDeadContext]].
	label := label asText
		addAllAttributes: (self tdbAttributesForStyle: contextStyle);
		yourself.
	
	^ label