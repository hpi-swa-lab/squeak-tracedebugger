extensions
isContextAlive: aContext atTime: timeIndex
	"Answer whether is aContext alive at the given time index.
	Senders might be tempted to simply send #isDead to the context, but there is no contract guaranteeing that this would answer false for *not yet* created context instances (#31). This dispatch encapsulates the tracing details of context instances."

	timeIndex >= 0 ifFalse: [^ false].
	^ (self object: aContext atTime: timeIndex) isDead not
	"See TDBTracingSimulator>>#context:activateMethod:withArgs:receiver:do:."