enumerating
collect: aBlock
	"Evaluate aBlock with each of the receiver's values. Answer a new slice of the collected results. If any value frays out while evaluating aBlock, the new slice will have different time intervals.
	To apply the different state of the values, aBlock will be evaluated in a TDBRangeRetracingSimulator. This does not impair the execution semantics of the block (except for reduced performance), but all side effects will be hidden from the rest of the image. They will only be visible to further requests of the return value. Use #values instead to convert the receiver into a conventional discretized collection."

	| index |
	index := 0.
	^ (self species
		memory: memory
		intervals: intervals
		rawValues:
			(rawValues with: intervals collect: [:value :interval |
				| simulator |
				simulator := TDBRetracingSimulator forMemory: memory atTimes: interval.
				sideEffects ifNotNil:
					[(sideEffects at: (index := index + 1)) ifNotNil: [:thisSideEffects |
						simulator sideEffects: thisSideEffects]].
				simulator evaluate: [aBlock value: value]])
		"assure non-nil sideEffects to tell #rawNoCoalesceGather: to read side effects from rawValues"
		sideEffects: (sideEffects ifNil: [(intervals collect: [:interval | nil])]))
			rawNoCoalesceGather: [:eachResult | eachResult]