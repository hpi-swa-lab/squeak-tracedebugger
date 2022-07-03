controlling
context: aContext doReadPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock

	| receiverAndArgs resultOrFailTokens |
	"Combine all receivers and arguments."
	receiverAndArgs := self
		context: aContext
		combineArguments: (arguments copyWithFirst: receiver)
		collect: [:eachReceiverAndArgs | eachReceiverAndArgs].
	(self context: aContext isVector: receiverAndArgs) ifFalse:
		[^ super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiverAndArgs first
			args: receiverAndArgs allButFirst
			do: aBlock].
	
	((primitiveIndex = 60 "primitiveAt" or: [primitiveIndex = 210 "primitiveContextAt"])
		and: [(aContext objectClass: receiver) tdbIsContextClass])
			ifTrue:
				["Context instances may have a variable size. We must not fetch entire vectors from the memory for each argument which could be higher than the current receiver size, causing an out-of-bound read from [getCurrent:] in #context:simulatedObject:basicAt:ifHit:."
				^ self fork: aContext for: receiverAndArgs collect: [:eachContext :eachReceiverAndArgs |
					eachContext
						doPrimitive: primitiveIndex
						method: aCompiledMethod
						receiver: eachReceiverAndArgs first
						args: eachReceiverAndArgs allButFirst]].
	
	"Run primitive for each combination. Avoid costly forks at this point but only store the result of each call."
	resultOrFailTokens := receiverAndArgs rawCollect: [:eachReceiverAndArgs |
		| result |
		result := super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: eachReceiverAndArgs first
			args: eachReceiverAndArgs allButFirst
			do: aBlock.
		(aContext isPrimFailToken: result)
			ifFalse: [{aContext pop. nil}]
			ifTrue: [{nil. result}]].
	
	"Fold subsequential successes/fail tokens."
	resultOrFailTokens := resultOrFailTokens rawCondense: [:a :b |
		a second == nil = (b second == nil)].
	
	"Now we can create a reasonable number of forks. Reapply the effect of each primitive call to one fork. Instead of overwriting #send:to:with:lookupIn:, too, we handle primitive failures here already."
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
								[(resultOrFailToken rawCollect: [:array | array first])
									rawGather: [:each | each]])]
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