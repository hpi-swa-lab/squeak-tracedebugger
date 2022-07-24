private
withSnapshotAtTime: timeIndex do: aBlock

	| snapshot result |
	result := self memorySlice atTime: timeIndex.
	
	result hasError ifTrue: [^ self changed: #flash].
	snapshot := result result.
	(thisContext objectClass: snapshot tdbproxyYourself) isTdbMemorySliceClass ifTrue:
		[snapshot := snapshot tdbproxyYourself
			setSideEffects: (Array new: snapshot tdbproxyYourself intervals size withAll: snapshot xxxtdbproxySideEffects);
			atTime: timeIndex].
	
	^ aBlock value: snapshot