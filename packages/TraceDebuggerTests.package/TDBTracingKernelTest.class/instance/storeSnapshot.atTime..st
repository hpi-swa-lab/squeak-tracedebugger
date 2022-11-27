snapshots
storeSnapshot: aContext atTime: timeIndex

	| bareContext |
	self flag: #todo. "To avoid occasional mismatches due to referenced SimulationContext subinstances, we should decustomize the entire stack here in-place temporarily similar to TDBTrace>>#enableSimulatorDuring:."
	bareContext := aContext decustomize: aContext.
	snapshots at: timeIndex put:
		bareContext -> (self createSnapshot: bareContext).