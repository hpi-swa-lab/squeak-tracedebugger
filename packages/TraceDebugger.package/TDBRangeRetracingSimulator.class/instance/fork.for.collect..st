private - vectors
fork: aContext for: vector collect: contextAndValueBlock
	"For each value in the vector, evaluate contextAndValueBlock with a fork of aContext. Answer the collected results, creating a new vector if necessary."

	| index size |
	(size := vector times size) = 1 ifTrue:
		[^ contextAndValueBlock value: aContext value: vector rawValues first].
	
	index := 0.
	^ vector rawWithTimesCollect: [:eachValue :times |
		| fork |
		fork := (index := index + 1) = size
			ifFalse: [self fork: aContext atTimes: times]
			ifTrue:
				["Reuse original context and simulator. Optimization."
				self timeIndices: times; postFork. aContext].
		contextAndValueBlock value: fork value: eachValue]