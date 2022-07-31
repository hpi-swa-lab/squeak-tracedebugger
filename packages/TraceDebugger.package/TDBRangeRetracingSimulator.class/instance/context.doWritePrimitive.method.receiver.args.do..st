controlling
context: aContext doWritePrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock
	"Essentially vector checks for receiver and arguments, edge case handling, and optimizations. Contains unrolled code for greater performance."

	| numArgs receiverClass primitiveArgIndex primitiveReceiver |
	numArgs := primitiveNumArgs at: primitiveIndex.
	primitiveReceiver := (arguments copyWithFirst: receiver) atLast: numArgs + 1.
	primitiveArgIndex := numArgs = 2
		ifTrue: [arguments atLast: 2].
	
	((receiverClass := aContext objectClass: primitiveReceiver) isBits and: [numArgs > 0]) ifTrue:
		["Bits classes do not accept arbitary element values. Handle any potential violations here."
		| primitiveArgValue |
		primitiveArgValue := arguments atLast: 1.
		(self context: aContext isVector: primitiveArgValue) ifTrue:
			[primitiveArgValue := primitiveArgValue atTimes: timeIndices.
			primitiveArgValue hasSingleValue
				ifTrue:
					[primitiveArgValue := arguments atLast: 1 put: primitiveArgValue rawValues first]
				ifFalse:
					["Element value is a vector, trigger #'invalid argument' checks from here."
					| okToStore |
					okToStore := primitiveArgValue rawCollect: [:eachValue |
						self context: aContext okToStore: eachValue inBits: receiverClass].
					okToStore hasSingleValue ifFalse:
						["The primitive would fail for some points in time. Fork."
						^ self fork: aContext for: okToStore withTimesCollect: [:eachContext :eachOkToStore :times |
							self
								context: eachContext
								runPrimitive: primitiveIndex
								method: aCompiledMethod
								receiver: receiver
								args: (arguments allButLast copyWith: (primitiveArgValue atTimes: times))]].
					"The primitive will behave constantly for the vector."
					okToStore rawValues first ifTrue:
						["As we cannot store vectors in bits classes, make sure to emulate the primitive only to store the value in sideEffects."
						ownObjects removeKey: primitiveReceiver ifAbsent: []]]]].
	
	(self context: aContext isVector: primitiveReceiver) ifTrue:
		[primitiveReceiver := primitiveReceiver atTimes: timeIndices.
		^ (primitiveArgIndex notNil and: [self context: aContext isVector: primitiveArgIndex])
			ifFalse:
				["Only the receiver is a vector."
				self fork: aContext for: primitiveReceiver collect: [:eachContext :eachReceiver |
					self
						context: eachContext
						runPrimitive: primitiveIndex
						method: aCompiledMethod
						receiver: eachReceiver
						args: (arguments last: (primitiveNumArgs at: primitiveIndex))]]
			ifTrue:
				["Both receiver and argIndex are vectors."
				| receiverAndArgIndex |
				primitiveArgIndex := primitiveArgIndex atTimes: timeIndices.
				receiverAndArgIndex := self
					context: aContext
					combineArguments: {receiver. primitiveArgIndex}
					collect: [:eachReceiverAndArgIndex | eachReceiverAndArgIndex].
				self fork: aContext for: receiverAndArgIndex collect: [:eachContext :eachReceiverAndArgIndex |
					self
						context: eachContext
						runPrimitive: primitiveIndex
						method: aCompiledMethod
						receiver: eachReceiverAndArgIndex first
						args: {eachReceiverAndArgIndex second. arguments atLast: 1}]]].
	
	(primitiveArgIndex notNil and: [self context: aContext isVector: primitiveArgIndex]) ifTrue:
		["Only argIndex is a vector."
		primitiveArgIndex := primitiveArgIndex atTimes: timeIndices.
		^ self fork: aContext for: primitiveArgIndex collect: [:eachContext :eachArgIndex |
			self
				context: eachContext
				runPrimitive: primitiveIndex
				method: aCompiledMethod
				receiver: receiver
				args: {eachArgIndex. arguments atLast: 1}]].
	
	primitiveIndex = 105 "primitiveStringReplace" ifTrue:
		[| receiverAndArgs |
		receiverAndArgs := self
			context: aContext
			combineArguments: ((arguments last: 4) copyWithFirst: receiver)
			collect: [:eachReceiverAndArgs | eachReceiverAndArgs].
		(self context: aContext isVector: receiverAndArgs) ifTrue:
			["All arguments and the receiver that are vectors need to be combined into different forks."
			self flag: #optimize. "If {start. stop} is constant, we could avoid forks by using SIMD semantics."
			^ self fork: aContext for: receiverAndArgs collect: [:eachContext :eachReceiverAndArgs |
				self
					context: eachContext
					runPrimitive: primitiveIndex
					method: aCompiledMethod
					receiver: eachReceiverAndArgs first
					args: eachReceiverAndArgs allButFirst]].
		^ super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiverAndArgs first
			args:
				(arguments copy
					"Resolve possible singleton vectors."
					replaceFrom: arguments size - 4 + 1 to: arguments size with: receiverAndArgs allButFirst
					yourself)
			do: aBlock].
	
	(primitiveIndex = 148 "primitiveClone" and: [(aContext objectClass: receiver) tdbIsContextClass]) ifTrue:
		["Context instances may have a variable size. As the memory simulator cannot handle a vector size, fork for each size."
		self context: aContext simulatedObject: receiver instVarAt: 3 "stackp" ifHit: [:stackp |
			(self context: aContext isVector: stackp) ifTrue:
				[^ self fork: aContext for: stackp collect: [:eachContext :eachStackp |
					eachContext
						doPrimitive: primitiveIndex
						method: aCompiledMethod
						receiver: receiver
						args: arguments]]]].
	
	^ super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock