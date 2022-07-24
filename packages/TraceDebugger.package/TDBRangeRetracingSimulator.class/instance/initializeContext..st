controlling
initializeContext: aContext

	| customizeContext |
	"Hack for debugging support: When a vector of contexts is detected here after a fork, offer the user to continue with the execution of one of the forks. Future tooling could also display all running contexts in parallel, but we're not there yet.
	To try this out, see #exampleDebugForks on my class side."
	((customizeContext := thisContext sender sender) method == (SimulationContext >> #basicCustomize:)) ifTrue:
		[| originalContext |
		originalContext := customizeContext arguments at: 1.
		(thisContext objectClass: originalContext) isTdbMemorySliceClass ifTrue:
			[| chosenContext |
			originalContext hasSingleValue ifTrue: [^ originalContext rawValues first].
			chosenContext := Project uiManager
				chooseFromLabeledValues:
					((originalContext timesAndRawValuesCollect: [:eachTimeIndices :eachContext |
						('[@ {1}] {2}' format: {eachTimeIndices. eachContext}) -> eachContext])
							as: OrderedDictionary)
				title: 'Choose fork to debug'.
			chosenContext ifNil:
				[^ Model new tdbAbortRequest].
			^ aContext
				becomeForward: (customizeContext receiver customize: chosenContext)
				copyHash: true]].
	
	^ super initializeContext: aContext