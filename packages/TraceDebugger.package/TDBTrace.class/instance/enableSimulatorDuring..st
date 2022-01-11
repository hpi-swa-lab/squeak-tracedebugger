simulation
enableSimulatorDuring: aBlock

	| simulator contexts |
	simulator := self tracingSimulatorClass forMemory: memory atTime: self maxTimeIndex.
	contexts := Array streamContents: [:stream |
		self streamAllContextsOn: stream].
	
	contexts
		elementsForwardIdentityTo: (contexts
			collect: [:context |
				simulator customize: context])
		copyHash: true.
	^ aBlock ensure:
		[contexts
			elementsForwardIdentityTo: (contexts
				collect: [:context |
					context decustomize: context])
			copyHash: true.]