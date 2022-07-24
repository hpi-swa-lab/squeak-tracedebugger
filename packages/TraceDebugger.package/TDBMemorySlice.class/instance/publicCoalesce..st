private
publicCoalesce: equalBlock
	"Evaluate equalBlock with each overlapping pair of the receiver's raw values. If the block answers true for a pair, replace the second one with the first one. See also #basicCondense: for preserving all values in a nested slice."

	| coalescedIntervals coalescedRawValues lastInterval lastValue index |
	coalescedIntervals := nil.
	lastInterval := nil.
	lastValue := Object new.
	index := 0.
	self timesAndValuesDo: [:interval :value |
		(lastInterval notNil
			and:
				[interval isEmpty
					or:
						[lastInterval stop + 1 = interval start and:
							[equalBlock value: lastValue value: value]]])
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
						coalescedRawValues nextPut: lastValue tdbproxyYourself].
					index := index + 1].
				lastInterval := interval.
				lastValue := value]].
	coalescedIntervals ifNotNil:
		[lastInterval isEmptyOrNil ifFalse:
			[coalescedIntervals nextPut: lastInterval.
			coalescedRawValues nextPut: lastValue tdbproxyYourself].
		intervals := coalescedIntervals contents.
		rawValues := coalescedRawValues contents].