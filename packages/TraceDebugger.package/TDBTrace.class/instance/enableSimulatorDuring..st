simulation
enableSimulatorDuring: aBlock

	| simulator contexts |
	simulator := self tracingSimulatorClass forMemory: memory atTime: self maxTimeIndex.
	
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