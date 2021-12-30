running
runCursorFrom: homeContext stepsAndAssertions: stepsAndAssertions

	| cursor homeClass |
	homeClass := homeContext methodClass.
	
	cursor := self classUnderTest forContext: homeContext.
	
	self should: (cursor context tdbIdentical: homeContext).
	self should: cursor context pc = cursor context startpc.
	
	stepsAndAssertions
		tdbTuplesDo: [:stepBlock :contexts :checks | | contextChecks |
			contextChecks := OrderedCollection streamContents: [:checksOut |
				("{contexts} flattened" contexts isArray
					flag: #workaround; "#flattened fails for nested compiled codes, see http://lists.squeakfoundation.org/pipermail/squeak-dev/2021-December/217930.html"
					ifTrue: [contexts] ifFalse: [{contexts}]) readStream in: [:contextsIn |
					contextsIn atEnd
						ifFalse: [checksOut nextPut:
							(contextsIn next
								ifNil: [[:context | context tdbIdentical:
									homeContext]]
								ifNotNil: [:contextIn | [:context | context homeMethod tdbIdentical:
									(contextIn isSymbol
										ifTrue: [homeClass lookupSelector: contextIn]
										ifFalse: [contextIn])]])].
					checksOut nextPutAll: contextsIn]].
			
			checks do: [:check |
				stepBlock numArgs + stepBlock isSymbol asBit > 1
					ifTrue: [stepBlock value: cursor value: cursor context]
					ifFalse: [stepBlock value: cursor].
				
				check = #isDead
					ifFalse: [self assert:
						cursor context pc > cursor context startpc].
				
				contextChecks do: [:contextCheck |
					self assert: (contextCheck value: cursor context) description: ['Hit {1}' format: {cursor context}]].
				self assert:
					(check value: cursor context)]].