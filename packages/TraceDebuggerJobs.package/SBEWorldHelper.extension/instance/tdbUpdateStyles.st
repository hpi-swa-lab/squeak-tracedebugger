*TraceDebuggerJobs-utils
tdbUpdateStyles

	self world allMorphsDo: [:morph |
		(morph respondsTo: #updateStyleNow)
			ifTrue: [morph updateStyleNow]].