private
xxxtdbproxyForward: aBlock
	"Evaluate aBlock, which may refer to the receiver, in a retracing simulator. Answer the result in a similar proxy so that clients can send entire message chains to the virtual state space.
	The retracing simulator will detect any access to the receiver proxy and unwrap it automatically. See TDBRetracingSimulator>>#context:send:to:with:lookupIn:do: for instance."

	| simulator result |
	simulator := TDBRetracingSimulator forMemory: memory atTime: timeIndex.
	sideEffects ifNotNil: [simulator sideEffects: sideEffects copy].
	
	result := simulator evaluate: aBlock.
	
	^ result
		tdbInMemory: memory
		atTime: timeIndex
		withSideEffects: simulator sideEffects