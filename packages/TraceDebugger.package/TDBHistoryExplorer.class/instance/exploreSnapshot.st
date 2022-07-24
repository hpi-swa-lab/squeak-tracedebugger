actions
exploreSnapshot

	^ self withSnapshotDo: [:snapshot |
		self auxiliaryInspector exploreObject: snapshot]