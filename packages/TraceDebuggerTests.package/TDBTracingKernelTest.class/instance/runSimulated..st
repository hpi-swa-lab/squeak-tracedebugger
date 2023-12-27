private
runSimulated: aBlock
	"Run aBlock and periodically create a snapshot of the current context. After aBlock has finished, check all snapshots in the recorded memory."

	| result |
	result := [simulator evaluate: aBlock]
		on: SimulatorLimitExceeded
		do: [:ex |
			| context |
			context := ex context.
			
			"Snapshots of simulation contexts that will decustomized later before comparison do not make sense. We could temporarily decustomize all contexts but there is no easy way to enumerate them, thus this undercomplex heuristic. If it breaks, likely increase 2 to 3. See comment in #storeSnapshot:atTime:."
			((context stackOfSize: 2) anySatisfy: [:ctx | ctx receiver isKindOf: SimulationContext]) ifTrue:
				[self increaseStepLimitSlightly.
				ex resume].
			
			self storeSnapshot: context atTime: limit stepCount - 1.
			self increaseStepLimit.
			ex resume].
	
	self checkSnapshots.
	
	^ result