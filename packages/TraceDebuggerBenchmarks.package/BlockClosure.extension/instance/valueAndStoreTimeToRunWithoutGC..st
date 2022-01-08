*TraceDebuggerBenchmarks-UI-*chronology-core
valueAndStoreTimeToRunWithoutGC: storeBlock

	| fullGCMillis incrementalGCMillis |
	self flag: #moveUpstream.
	
	fullGCMillis := Smalltalk vmParameterAt: 8.
	incrementalGCMillis := Smalltalk vmParameterAt: 10.
	^ self valueAndStoreTimeToRun: [:duration |
		storeBlock value: duration
			+ (fullGCMillis - (fullGCMillis := Smalltalk vmParameterAt: 8)) milliSeconds
			+ (incrementalGCMillis - (incrementalGCMillis := Smalltalk vmParameterAt: 10)) milliSeconds]