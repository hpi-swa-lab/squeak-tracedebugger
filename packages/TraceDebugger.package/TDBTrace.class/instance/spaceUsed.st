support
spaceUsed
	"Answer the number of bytes occupied by the receiver."

	| tally |
	tally := SpaceTally new.
	^ (tally spaceForInstance: self depth: 0)
		+ (tally spaceForInstance: self children depth: 2)
		+ (self originalContext isDead
			ifTrue: [tally spaceForInstance: self originalContext depth: 1]
			ifFalse: [0])
		+ (tally spaceForInstance: tracesForContexts depth: 2)
		+ (self children detectSum: [:child | child spaceUsed])