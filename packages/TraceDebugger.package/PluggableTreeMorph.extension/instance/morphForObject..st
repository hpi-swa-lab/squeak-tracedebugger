*TraceDebugger-UI-private-pseudo override
morphForObject: anObject

	self flag: #moveUpstream "and use in #updateFromChangedObject:".
	
	^ scroller submorphs
		detect: [:morph | morph complexContents item == anObject]
		ifFound: [:morph | morph]
		ifNone: ["Ignore the request. Object may not be visible anyway."]