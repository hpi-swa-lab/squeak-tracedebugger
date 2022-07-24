private
withSnapshotDo: aBlock

	^ self
		withSnapshotAtTime: self selectedContextSlice maxTimeIndex
		do: aBlock