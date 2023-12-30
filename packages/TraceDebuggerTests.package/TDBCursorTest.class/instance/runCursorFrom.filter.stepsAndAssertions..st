running
runCursorFrom: homeContext filter: filter stepsAndAssertions: stepsAndAssertions
	"stepsAndAssertions:
		#(...
			(steppingSelectorOrBlock expectedContextSelector (expectedContextPredicate1 expectedContextPredicate2 ...))
		...)
	For each context check per tuple, the stepping selector will be sent to the cursor one more time."

	| cursor homeClass |
	homeClass := homeContext methodClass.
	
	cursor := self classUnderTest forContext: homeContext.
	cursor contextFilter: filter.
	
	self should: (cursor context tdbIdentical: homeContext).
	self should: cursor context pc = cursor context startpc.
	
	stepsAndAssertions
		tdbTuplesDo: [:stepBlock :contexts :checks | | contextChecks |
			Transcript showln: 'step and assertions: '; show: {stepBlock. contexts. checks}.
			contextChecks := OrderedCollection streamContents: [:checksOut |
				("{contexts} flattened" contexts isArray
					flag: #workaround; "#flattened fails for nested compiled codes, see http://lists.squeakfoundation.org/pipermail/squeak-dev/2021-December/217930.html"
					ifTrue: [contexts] ifFalse: [{contexts}]) readStream in: [:contextsIn |
					contextsIn atEnd
						ifFalse: [checksOut nextPut:
							(contextsIn next
								ifNil: [[:context | context tdbIdentical: homeContext]]
								ifNotNil: [:contextIn | [:context | context homeMethod tdbIdentical:
									(contextIn isSymbol
										ifTrue: [homeClass lookupSelector: contextIn]
										ifFalse: [contextIn])]])].
					checksOut nextPutAll: contextsIn]].
			
			checks do: [:check |
				Transcript showln: 'step '; show: cursor; show: ' with '; show: stepBlock.
				stepBlock numArgs + stepBlock isSymbol asBit > 1
					ifTrue: [stepBlock value: cursor value: cursor context]
					ifFalse: [stepBlock value: cursor].
				
				self assert: cursor context pc > cursor context startpc.
				
				contextChecks do: [:contextCheck |
					Transcript showln: 'check context '; show: cursor context; show: ' with '; show: contextCheck.
					self assert: (contextCheck value: cursor context) description: ['Hit {1}' format: {cursor context}]].
				Transcript showln: 'check '; show: cursor; show: ' with '; show: check.
				self assert:
					(check value: cursor context)]].