snapshots
storeSnapshot: aContext atTime: timeIndex

	| bareContext |
	bareContext := aContext decustomize: aContext.
	snapshots at: timeIndex put:
		bareContext -> (self createSnapshot: bareContext).