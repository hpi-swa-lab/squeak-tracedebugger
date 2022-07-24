support
spaceUsed
	"Answer the number of bytes occupied by all historic state."

	| tally |
	tally := SpaceTally new.
	^ ({self. values. values array} detectSum: [:ea | tally spaceForInstance: ea depth: 0])
		+ ((values array select: [:assoc | assoc notNil])
			detectSum: [:assoc |
				(tally spaceForInstance: assoc key "object" depth: 0)
					+ (tally
						spaceForInstance: assoc value "slots"
						depth: 6 "array anyOne value array anyOne second")])