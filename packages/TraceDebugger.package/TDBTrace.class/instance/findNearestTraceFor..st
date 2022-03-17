private
findNearestTraceFor: aContext
	"Search the entire tree for aContext in an ascending order."

	self flag: #optimize. "Don't visit descendants multiple times!"
	
	self withAllDescendantsDepthFirstDo: [:trace |
		trace originalContext == aContext
			ifTrue: [^ trace]].
	
	^ nil