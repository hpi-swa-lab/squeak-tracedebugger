support
spaceUsed
	"Answer the number of bytes occupied by the receiver."

	^ super spaceUsed
		+ (SpaceTally new spaceForInstance: tracesForContexts depth: 2)