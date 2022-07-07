actions
inspectSnapshot

	^ self withSnapshotDo: [:snapshot |
		self auxiliaryInspector inspectObject: snapshot]