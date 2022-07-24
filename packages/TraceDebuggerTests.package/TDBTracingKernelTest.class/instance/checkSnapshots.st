snapshots
checkSnapshots

	snapshots keysAndValuesDo: [:timeIndex :snapshot | | snap shot |
		snap := snapshot key.
		shot := snapshot value.
		self assert: shot equals:
			((memory object: snap atTime: timeIndex) in: [:proxy | self createSnapshot: proxy])].
	
	snapshots middle in: [:timeIndexAndSnapshot | | timeIndex snap shot slice |
		timeIndex := timeIndexAndSnapshot key.
		snap := timeIndexAndSnapshot value key.
		shot := timeIndexAndSnapshot value value.
		slice := memory object: snap atTimes: (timeIndex to: timeIndex) collect: [:proxy | self createSnapshot: proxy].
		self assert: slice hasSingleValue.
		self assert: shot equals: (slice atTime: timeIndex)].