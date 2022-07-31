controlling
context: aContext runSimulated: aBlock contextAtEachStep: anotherBlock do: simulateBlock
	"Copied from SimulationContext>>#runSimulated:contextAtEachStep: and customized for vector semantics. Answer a TDBMemorySlice with the simulated values of aBlock.
	Other than in normal interpretation, Context>>#step may also answer a vector instead of a normal context here when the execution is forked. Once this happens, we maintain and advance a slice of parallel contexts.
	Optimized for performance over readability. The bytecode makes heavy use of inlining and contains a lot of unrolled code to reduce the total number of message sends."

	| home current ensure complete result results debugIndex newSideEffects |
	"*** 1. INITIALIZATION ***"
	home := thisContext home sender.
	current := aBlock asContext.
	"Affect the context stack of the receiver during the simulation of aBlock."
	current privSender: home.
	
	results := complete := nil.
	newSideEffects := Dictionary new.
	
	"Insert outer context denoting the end of the simulation."
	ensure := (ensure := current) insertEnsure:
		["*** 3. TERMINATION (ctd.) ***"
		"We get here for each context that has completed - either after regular completion through 'current jump' below, or during an external exception handler/non-local return."
		
		"Get result from local/non-local return."
		self flag: #todo. "terminate some contexts from previous sender here?"
		ensure := thisContext sender.
		result := (ensure selector
			caseOf:
				{[#resume:through:] -> [ensure at: 1 "value"].
				[#resumeEvaluating:] ->
					[| resumeBlock |
					resumeBlock := ensure at: 1 "aBlock".
					self assert: resumeBlock outerContext selector == #resume:. "other sender #returnEvaluating: is only sent to signaler contexts"
					resumeBlock value]}
			otherwise: [(ensure "BlockClosure >> #ensure: or BlockClosure >> #ifCurtailed:" at: 3) "returnValue"]).
		
		"Record result."
		results ifNotNil:
			[results add: complete removeFirst -> result].
		complete isEmptyOrNil ifFalse:
			["Further completed context exist, handle the next one. Like recursion, even though the stack will be cut by the #jump."
			current := complete removeFirst.
			newSideEffects at: complete first put: current simulator sideEffects.
			"Continue with the execution in the previous context."
			current := (aContext decustomize: current) copyTo: ensure sender.
			current jump].
		
		
		"*** 4. RESULT GENERATION ***"
		"All results have been recorded! Assemble them into a common slice."
		results := results
			ifNil:
				["The execution has not forked, assure results is a slice anyway."
				result isTdbMemorySlice
					ifTrue: [result]
					ifFalse: [self memorySliceClass memory: memory intervals: {timeIndices} rawValues: {result}]]
			ifNotNil:
				[results := results withKeysSorted: [:interval | interval first] ascending.
				self memorySliceClass memory: memory intervals: results keys rawValues: results values].
		results := results rawGather: [:eachResult | eachResult].
		
		"Assemble new side effects analogously."
		newSideEffects := newSideEffects withKeysSorted: [:interval | interval first] ascending.
		newSideEffects := results species memory: memory intervals: newSideEffects keys rawValues: newSideEffects values.
		
		"Assure all time indices of the produced slices are still present as separate groups in the results slice."
		results := self finalSlice: results.
		
		"Add new side effects to the results slice."
		 results setSideEffects: "align time indices"
			(results intervals collect: [:interval |
				| sliceForInterval |
				sliceForInterval := newSideEffects atTimes: interval.
				self assert: sliceForInterval hasSingleValue.
				sliceForInterval rawValues first]).
		
		
		"*** 5. END ***"
		"Return to original sender."
		home
			push: results;
			jump].
	
	current := aContext customize: current.
	current simulator: current simulator fork.
	complete := nil.
	debugIndex := 0.
	
	
	"*** 2. EXECUTION ***"
	"Run the simulation. Stop execution on time, don't expose simulation details to caller."
	[debugIndex := debugIndex + 1.
	"self haltIf: debugIndex = 1235."
	
	"Is the context about to return to/through to ensure context?"
	current isTdbMemorySlice
		ifFalse:
			[(current sender == ensure and: [current willReturn]) or: 
				["Context >> #resume:"
				(aContext objectClass: current receiver) simIsContextClass
					and: [(current selector == #resume: or: [current selector == #resume:through:])
					and: [current size >= 2
					and: [(current at: 2) == ensure]]]]]
		ifTrue:
			["Find all contexts from the slice that are about to return to/through the ensure context and store them in complete. Put back the remaining contexts (with nils for all completed contexts) into the context slice."
			| anyUncompletedContext |
			anyUncompletedContext := false.
			current := current rawWithTimesCollect: [:eachCurrent :times |
				eachCurrent ifNotNil:
					[((eachCurrent sender == ensure and: [eachCurrent willReturn]) or: 
						["Context >> #resume:"
						((aContext objectClass: eachCurrent receiver) inheritsFrom: Context)
							and: [(eachCurrent selector == #resume: or: [eachCurrent selector == #resume:through:])
							and: [eachCurrent size >= 2
							and: [(eachCurrent at: 2) == ensure]]]])
								ifFalse:
									[anyUncompletedContext := true.
									eachCurrent]
								ifTrue:
									[(complete ifNil: [complete := OrderedCollection new])
										add: eachCurrent;
										add: times.
									nil]]].
			anyUncompletedContext not]]
		whileFalse:
			["Advance the context(s)."
			current tdbRangeContextsDo: [:eachContext | anotherBlock cull: eachContext].
			current := current tdbRangeContextsStep].
	
	
	"*** 3. TERMINATION ***"
	"Simulation completed! Handle the (first) completed context."
	complete ifNotNil:
		[current := complete removeFirst.
		results := Dictionary new].
	newSideEffects
		at: (complete ifNil: [timeIndices] ifNotNil: [complete first])
		put: current simulator sideEffects.
	"Continue with the execution in the previous context."
	current := (aContext decustomize: current) copyTo: ensure sender.
	current jump.