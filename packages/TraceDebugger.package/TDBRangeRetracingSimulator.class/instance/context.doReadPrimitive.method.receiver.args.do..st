controlling
context: aContext doReadPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock

	| contextSize receiverAndArgsPlus plus originalTimes resultOrFailTokens |
	"Combine all receivers and arguments."
	receiverAndArgsPlus := arguments copyWithFirst: receiver.
	"Compute extra plus for partitioning the vector further."
	plus := 0.
	contextSize := ((primitiveIndex = 60 "primitiveAt" or: [primitiveIndex = 210 "primitiveContextAt"]) or: [primitiveIndex = 105 "primitiveStringReplace"])
		ifTrue:
			["Context instances may have a variable size. We must not fetch entire vectors from the memory for each argument which could be higher than the current receiver size, causing an out-of-bound read from [getCurrent:] in #context:simulatedObject:basicAt:ifHit:. To ensure this, we add an auxiliary 'plus' partition for each different context size."
			self context: aContext combineArguments: {receiver} collect: [:eachReceiver |
				(aContext objectClass: eachReceiver first) tdbIsContextClass ifTrue:
					[self context: aContext simulatedObject: eachReceiver first instVarAt: 3 "stackptr" ifHit: [:size |
						(self context: aContext isVector: size) ifTrue:
							[plus := 1.
							size]]]]].
	plus > 0 ifTrue:
		[receiverAndArgsPlus := receiverAndArgsPlus copyWith: contextSize].
	receiverAndArgsPlus := self
		context: aContext
		combineArguments: receiverAndArgsPlus
		collect: [:eachReceiverAndArgsPlus | eachReceiverAndArgsPlus].
	
	(self context: aContext isVector: receiverAndArgsPlus) ifFalse:
		[| argsPlus |
		argsPlus := receiverAndArgsPlus allButFirst.
		plus > 0 ifTrue: [argsPlus := argsPlus allButLast: plus].
		^ super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiverAndArgsPlus first
			args: argsPlus
			do: aBlock].
	
	"Run primitive for each combination. Avoid costly forks for failing primitives at this point but only store the result of each call."
	originalTimes := timeIndices.
	resultOrFailTokens := receiverAndArgsPlus rawWithTimesCollect: [:eachReceiverAndArgsPlus :times |
		| eachArgsPlus result |
		eachArgsPlus := eachReceiverAndArgsPlus allButFirst.
		plus > 0 ifTrue: [eachArgsPlus := eachArgsPlus allButLast: plus].
		timeIndices := times.
		result := super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: eachReceiverAndArgsPlus first
			args: eachArgsPlus
			do: aBlock.
		(aContext isPrimFailToken: result)
			ifFalse: [{aContext pop. nil}]
			ifTrue: [{nil. result}]].
	timeIndices := originalTimes.
	
	"Fold subsequential successes/fail tokens into nested slices."
	resultOrFailTokens := resultOrFailTokens rawCondense: [:a :b |
		a second == nil = (b second == nil)].
	
	"Now we can create a minimal number of forks for failed/passed primitive calls. Reapply the effect of each primitive call to one fork. Instead of overwriting #send:to:with:lookupIn:, too, we handle primitive failures here already."
	^ self fork: aContext for: resultOrFailTokens collect: [:eachContext :resultOrFailToken |
		| isSlice |
		((isSlice := resultOrFailToken isTdbMemorySlice)
			ifFalse: [resultOrFailToken second]
			ifTrue: [resultOrFailToken rawValues first second])
				ifNil:
					[eachContext push:
						(isSlice
							ifFalse: [resultOrFailToken first]
							ifTrue:
								[allVectors add:
									((resultOrFailToken rawCollect: [:array | array first])
										rawGather: [:each | each])])]
				ifNotNil:
					[(eachContext
						activateMethod: aCompiledMethod
						withArgs: arguments
						receiver: receiver)
							failPrimitiveWith:
								(isSlice
									ifFalse: [resultOrFailToken second]
									ifTrue:
										[(resultOrFailToken rawCollect: [:array | array second])
											rawGather: [:each | each]])]]