extensions
isContextAlive: aContext
	"Answer whether is aContext alive at the current time index.
	Senders might be tempted to simply send #isDead to the context, but there is no contract guaranteeing that this would answer false for *not yet* created context instances. This dispatch encapsulates the tracing details of context instances."

	" ^ self timeIndex
		between: (self minTimeIndexFor: aContext)
		and: (self maxTimeIndexFor: aContext)"
	
	^ aContext isDead not
	"See TDBTracingSimulator>>#context:activateMethod:withArgs:receiver:do:."