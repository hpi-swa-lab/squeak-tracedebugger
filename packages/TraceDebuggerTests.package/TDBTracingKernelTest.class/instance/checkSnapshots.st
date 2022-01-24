snapshots
checkSnapshots

	snapshots keysAndValuesDo: [:timeIndex :snapshot | | shot snap |
		snap := snapshot key.
		shot := snapshot value.
		self assert: shot equals:
			((memory object: snap atTime: timeIndex) in: [:proxy | self createSnapshot: proxy])].