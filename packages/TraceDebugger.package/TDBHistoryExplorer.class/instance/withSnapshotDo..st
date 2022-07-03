private
withSnapshotDo: aBlock

	| timeIndex snapshot result |
	timeIndex := self selectedContextSlice maxTimeIndex.
	result := self memorySlice atTime: timeIndex.
	
	result hasError ifTrue: [^ self changed: #flash].
	snapshot := result result.
	(thisContext objectClass: snapshot tdbproxyYourself) isTdbMemorySliceClass ifTrue:
		[snapshot := snapshot atTime: timeIndex].
	
	^ aBlock value: snapshot