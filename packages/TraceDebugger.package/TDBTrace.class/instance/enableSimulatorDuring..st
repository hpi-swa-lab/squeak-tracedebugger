simulation
enableSimulatorDuring: aBlock
	"Customize all relevant contexts during aBlock, so that advancing any traces will simulate the contexts in the tracing simulator. Always decustomize all contexts afterward so that clients can continue their execution in the VM if needed."

	| simulator contexts |
	simulator := self tracingSimulatorClass forMemory: memory atTime: self maxTimeIndex.
	
	self flag: #todo. "Preserve other simulators #68"
	contexts := Array streamContents: [:stream |
		self flag: #(optimize coroutines). "Could we skip dead subtraces altogether?"
		self
			streamAllContextsOn: stream
			satisfying: [:context | context isDead not]].
	contexts
		elementsForwardIdentityTo: (contexts
			collect: [:context |
				simulator customize: context])
		copyHash: true.
	^ aBlock ensure:
		[contexts := Array streamContents: [:stream |
			self
				streamAllContextsOn: stream
				satisfying: [:context | context isSimulationContext]].
		contexts
			elementsForwardIdentityTo: (contexts
				collect: [:context |
					context decustomize: context])
			copyHash: true]