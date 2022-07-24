private - vectors
fork: aContext for: vector withTimesCollect: contextValueTimesBlock
	"For each value in the vector, evaluate contextValueTimesBlock with a fork of aContext. Answer the collected results, creating a new vector if necessary."

	| index size |
	(size := vector times size) = 1 ifTrue:
		[^ contextValueTimesBlock value: aContext value: vector rawValues first value: vector times first].
	
	index := 0.
	^ vector rawWithTimesCollect: [:eachValue :times |
		| fork |
		fork := (index := index + 1) = size
			ifFalse: [self fork: aContext atTimes: times]
			ifTrue:
				["Reuse original context and simulator. Optimization."
				self timeIndices: times; postFork. aContext].
		contextValueTimesBlock value: fork value: eachValue value: times]