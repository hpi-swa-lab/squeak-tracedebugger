private
coalesce: equalBlock

	| coalescedIntervals coalescedRawValues lastInterval lastRawValue index |
	coalescedIntervals := nil.
	lastInterval := nil.
	lastRawValue := Object new.
	index := 0.
	intervals with: rawValues do: [:interval :value |
		(((equalBlock value: lastRawValue value: value)
			and: [lastInterval isNil or: [lastInterval stop + 1 = interval start]])
				or: [interval isEmpty])
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