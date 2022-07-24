support
spaceUsed

	| tally space |
	tally := SpaceTally new.
	space := "self memory spaceUsed"0.
	space := space
		+ (tally spaceForInstance: intervals depth: 1)
		+ (tally spaceForInstance: rawValues depth: 2).
	sideEffects ifNotNil:
		[space := space + (sideEffects detectSum: #spaceUsed)].
	^ space