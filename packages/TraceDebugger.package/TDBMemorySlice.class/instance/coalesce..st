private
coalesce: equalBlock
	"Evaluate equalBlock with each overlapping pair of the receiver's raw values. If the block answers true for a pair, replace the second one with the first one. See also #basicCondense: for preserving all values in a nested slice."

	| coalescedIntervals coalescedRawValues lastInterval lastRawValue index |
	coalescedIntervals := nil.
	lastInterval := nil.
	lastRawValue := Object new.
	index := 0.
	intervals with: rawValues do: [:interval :value |
		(lastInterval notNil
			and:
				[interval isEmpty
					or:
						[lastInterval stop + 1 = interval start
							and: [equalBlock value: lastRawValue value: value]]])
			ifTrue:
				[coalescedIntervals ifNil:
					[coalescedIntervals := (Array new: intervals size) writeStream.
					coalescedRawValues := (Array new: rawValues size) writeStream.
					coalescedIntervals next: index putAll: intervals startingAt: 1.
					coalescedRawValues next: index putAll: rawValues startingAt: 1].
				lastInterval := lastInterval start to: interval stop]
			ifFalse:
				[lastInterval isEmptyOrNil ifFalse:
					[coalescedIntervals ifNotNil:
						[coalescedIntervals nextPut: lastInterval.
						coalescedRawValues nextPut: lastRawValue].
					index := index + 1].
				lastInterval := interval.
				lastRawValue := value]].
	coalescedIntervals ifNotNil:
		[lastInterval isEmptyOrNil ifFalse:
			[coalescedIntervals nextPut: lastInterval.
			coalescedRawValues nextPut: lastRawValue].
		intervals := coalescedIntervals contents.
		rawValues := coalescedRawValues contents].