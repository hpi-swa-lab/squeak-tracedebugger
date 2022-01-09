simulation
enableSimulatorDuring: aBlock

	| simulator |
	self flag: #rename.
	simulator := self tracingSimulatorClass forMemory: memory atTime: self maxTimeIndex.
	self enableSimulator: simulator.
	^ aBlock ensure:
		[self disableSimulator]