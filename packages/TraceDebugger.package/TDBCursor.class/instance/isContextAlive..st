extensions
isContextAlive: aContext
	"This is a bit more complicated than just sending #isDead, which would not detect whether the context has *not yet* been created."

	^ self timeIndex
		between: (self minTimeIndexFor: aContext)
		and: (self maxTimeIndexFor: aContext)