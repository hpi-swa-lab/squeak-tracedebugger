snapshots
checkSnapshots

	snapshots keysAndValuesDo: [:timeIndex :snapshot | | snap shot |
		snap := snapshot key.
		shot := snapshot value.
		self assert: shot equals:
			((memory object: snap atTime: timeIndex) in: [:proxy | self createSnapshot: proxy])].