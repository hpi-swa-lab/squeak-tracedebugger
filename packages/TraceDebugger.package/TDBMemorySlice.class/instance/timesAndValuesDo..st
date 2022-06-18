enumerating
timesAndValuesDo: aBlock
	"Evaluate aBlock with each of the receiver's values and the corresponding time interval. Each collection item may be a transparent view (TDBRangeProxy)."

	| index |
	index := 0.
	intervals with: rawValues do: [:interval :rawValue |
		(Mirror objectClass: rawValue) isTdbMemorySliceClass
			ifFalse:
				[(aBlock value: interval value:
					(rawValue tdbInMemory: memory atTimes: interval withSideEffects:
						(sideEffects ifNotNil: [sideEffects at: (index := index + 1)])))]
			ifTrue:
				[(rawValue atTimes: interval) timesAndValuesDo: [:eachInterval :eachRawValue |
					aBlock value: eachInterval value: eachRawValue]]].